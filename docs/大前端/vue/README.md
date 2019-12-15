---
title: "vue"
date: "2019-12-16"
---
# vue 使用axios和promise无痛刷新token

## 需求

最近在写项目，跟后端	讨论token刷新方案：前端登录后，后端返回`token`和`token有效时间`，当token过期时要求用旧token去获取新的token，前端需要做到无痛刷新`token`，即请求刷新token时要做到用户无感知。

## 分析

前端登录后会返回 `token` 和`refreshToken`  当`token` 过期后调用`refreshToken` 接口 拿到新`token`  然后在吧之前的请求在执行一遍 



## 实现

这里会使用[axios](https://github.com/axios/axios)来实现，会使用`axios.interceptors.response.use()`方法。



## 封装axios

```js

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API, // url = base url + request url

  // timeout: 5000 // request timeout
  withCredentials: true,
 
});

// 给实例添加一个setToken方法，用于登录后将最新token动态添加到header，同时将token保存在localStorage中
instance.setToken = (token,refreshToken) => {
instance.defaults.headers['Authorization'] = `Auth ${token}`
// 这里用到的存储是localStorage
window.localStorage.setItem('token', token)
  
window.localStorage.setItem('refreshToken', refreshToken)
}

function refreshToken () {

  // 我项目中  更新token 需要吧原有的token 换成refreshToken去请求   这里根据需求可以改动
  window.localStorage.setItem('token', window.localStorage.refreshToken)
  return instance({method:'post',url: '/api-token-refresh'})
}
  // 设置了路由拦截  这里清掉token 就会跳回登录页
function removeToken () {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('refreshToken')

}

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    
    
    const token = window.localStorage.token;

    token && (config.headers.Authorization = `Auth ${token}`);


 
    return config;
  },
  error => {
    return Promise.error(error);
  }
);


// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requests = []
// 响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data


  
      
      const config = response.config
      if (!isRefreshing) {
        isRefreshing = true
       
          
        
        return refreshToken().then(res => {
    
          const { token ,refreshToken} = res.data
         
          
          instance.setToken(token,refreshToken)
          config.headers['Authorization'] = `Auth ${token}`
          config.baseURL = ''
          console.log('token过期刷新接口');
           //  这里有个小问题  当在重试中 如果接口报错 就会直接跳转到登录页  需要后端配合
          // 已经刷新了token，将所有队列中的请求进行重试
          
          requests.forEach(cb => cb(token))
          requests = []
          return instance(config)
        },err=>{
          console.log(err)
          
        }).catch(res => {

         
          removeToken()
          router.push('/login')
          console.error('refreshtoken error =>', res)
         
          
        }).finally(() => {
          console.log('这边');
          
          isRefreshing = false
        })
      }else {
        // 正在刷新token，将返回一个未执行resolve的promise
        // 保存函数 等待执行
        return new Promise((resolve) => {
          // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
          requests.push((token) => {
            config.baseURL = ''
            config.headers['Authorization'] = `Auth ${token}`
            resolve(instance(config))
          })
        })
      }
  
    
 

    
     if (res.code === 0) {
   //  所有失败拦截
      return Promise.reject(res);
      // return res
    }
    return res
  },
  error => {
     console.log(error);
  
    return Promise.reject();
  }
);

export { instance };

```



## 特点



- 优点：不需额外的token过期字段，不需判断时间。
- 缺点： 会消耗多一次请求，耗流量。