const net = require('net');
const fs=require('fs');
const server = net.createServer();
server.on("connection", (client) => {
    var a=Math.random()*10;   
    client.on("data", (data) => {
        data=data.toString();
        var num1=data.indexOf("\n")
        var x=data.substr(0,num1)
        const [method,url,version]=x.split(" ");
        if(url=='/'){
            client.write("HTTP/1.1 200 OK \n");
            client.write("Content-type:text/html;charset=utf-8\n\n");
            client.write("<h1>welcome</h1><a href='/admin'>进入管理后台</a>");
            client.end();
        }
        if(url=='/admin'){
            var arr=data.trim().split('\n');
            var str=arr[(arr.length)-1];
            console.log(str)
            var last= str.split("=");
            console.log(last[1])
                if(fs.existsSync('./'+last[1]+'.txt')){
                    fs.readFile('./'+last[1]+'.txt',(err,data)=>{
                        client.write('HTTP/1.1 200 OK \n');
                        client.write('Content-Type: text/html;charset=UTF-8\n\n');
                        client.write(`${data}已登入`);
                        client.end(); 
                })
            }else{
                client.write("HTTP/1.1 302 ok \n");
                client.write("Content-type:text/html;charset=utf-8\n");
                client.write("location:http://localhost:8001/login\n\n")
                client.end();
            }
        }
        if(url=='/login'){
            // console.log(2222);
            // console.log(method);
            if(method=="GET"){
                client.write('HTTP/1.1 200 OK\n')
                client.write('Content-Type: text/html;charset=UTF-8\n\n')
                client.write('<form method="post" action="http://localhost:8001/login"><br>')
                client.write('<span>账号</span><input type="text" name="username" id=""><br>')
                client.write('密码<input type="password" name="pwd" id=""><br>')
                client.write('<input type="submit" value="登录">')
                client.write('</form>')
                client.end()
            }else if(method=="POST"){
                console.log(data)
                var y=data.trim()
                var num2=y.lastIndexOf("\n")
                var z=y.substr(num2)
                var n=z.split('&')
                if((n[0].split('=')[1]=='admin')&&n[1].split('=')[1]=='123456'){
                    var b=(Math.random()*100).toString(16)
                    fs.writeFile(`${b}.txt`,n[0].split('=')[1],()=>{
                        client.write('HTTP/1.1 302 OK\n')
                        client.write(`set-cookie:SESSID=${b}\n`)
                        client.write('Content-Type: text/html;charset=UTF-8\n')
                        client.write('Location:http://localhost:8001\n\n')
                        client.end()
                    })
                } 
            }
        }        
    })
})

    server.listen(8001, () => {
        console.log('服务器已开启');
    })