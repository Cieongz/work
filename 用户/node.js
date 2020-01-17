const net = require('net');
const server = net.createServer();
server.on("connection", (client) => {
    var a=Math.random()*10;   
    console.log("哈喽,It's me");
    client.on("data", (data) => {
        console.log(data.toString());
        client.write("HTTP/1.1 200 OK \n");
        // client.write("set-cookie:SID='hello';max-age=2592000");
        client.write('set-cookie:toke='+a+';max-age=3600');
        // client.write("Content-type:text/\n");
        // client.write("Content-length:20\n\n");
        // client.write("<h1>hello world</h1>");
        // client.write("&gt;h1&lt;hello world&gt;/h1&lt;");
        client.end();
    })

    // client.on("data",(data)=>{
    //     console.log(data.toString())
    //     data=data.toString()
    //     var index=data.indexOf("\n")
    //     var first=data.substring(0,index).trim()
    //     const [method,url,version]=first.split(" ")
    //     console.log(`当前是${method}请求`)
    //     client.end();
    // })


    client.on("data",(data)=>{
        data=data.toString();
        var index=data.indexOf('\n');
        var str=data.slice(0,index);
        var arr=str.split(' ');
        var str1=arr[1].toString();
        var index1=str1.indexOf('?');
        var obj={};
        if(index1 !=-1){
            var str1=str1.slice(index1+1);
            var arr1=str1.split('&');
            for(i in arr1){
                var [k,v]=arr1[i].split('=');
                obj[k]=v;
            }
            console.log(obj);
        }else{
            console.log('不,是我')
        }
         client.end();
    })

})
server.listen(8080, () => {
    console.log('服务器已开启');
})