---
title: "git遇到的问题"
date: "2019-08-16"
---

## ssh报错
我本地git突然就无法同步和连接远程github的库了。
报错内容如下：
```
ssh: connect to host github.com port 22: Connection timed out

fatal: Could not read from remote repository.

Please make sure you have the correct access rights

and the repository exists.
```
> 解决方法

`$ ssh -T -p 443 git@ssh.github.com`
