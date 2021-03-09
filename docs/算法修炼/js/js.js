let resp_data=[
    {
        village:'11'
    },
    {
        village:'22'
    },
    {
        village:'33'
    }
]
data = {}
villages = new Set()
resp_data.map(function(e,i,resp_data){
    village_name = e.village == null ? '其他':e.village

    if (resp_data[village_name]){
        data[village_name]=[...resp_data]

    }else{
        villages.add(village_name)
        e.title_name = village_name

        data[village_name] = [e]
    }

})
console.log(data)