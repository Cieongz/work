function square(b,h,k){
    var x='';
    switch(k){
    case 1://实心正方形
        for(var i=0;i<h;i++){
            for(var j=0;j<h;j++){
            x+=b;
            }
        x+="\n";
    }
    console.log(x);
    break;
    case 2://空心正方形
        for (var i=0;i<h;i++){
            for(var j=0;j<h;j++){
                if(i==0||i==h-1||j==0||j==h-1){
                    x+=b;
                }else{
                    x+='  ';
                }
            }   
            x+='\n';
        }
        console.log(x);
        break;
    }
}

function Triangle(b,h,k){
    var x='';
    switch(k){
        case 1://实心三角形
            for(var i=0;i<h;i++){
                for(var j=0;j<h;j++){
                    if(j>=0&&j<h-i){
                        x+=' ';
                    }else{
                        x+=b;
                    }
                }
                x+='\n';
            }
            console.log(x);
            break;
            case 2://空心三角形
                for(var i=0;i<=h;i++){
                    for(var j=0;j<=2*h;j++){
                        if(j+i==h||j-i==h||i==h){
                            x+=b;
                        }else{
                            x+='  ';
                        }
                    }
                    x+='\n';
                }
                console.log(x);
                break;
    }
}

function diamond(b,h,k){
    var x='';
    switch(k){
        case 1://实心菱形
            for(var i=-h;i<=h;i++){
                for(var j=0;j<=2*h;j++){
                    if(j>=Math.abs(i)&&j<=10-Math.abs(i)){
                        x+=b;
                    }else{
                        x+='  ';
                    }
                }
                x+='\n';
            }
            console.log(x);
            break;
            case 2://空心菱形
            for(var i=-h;i<=h;i++){
                for(var j=0;j<=2*h;j++){
                    if(j==Math.abs(i)||j+Math.abs(i)==2*h){
                        x+=b;
                    }else{
                        x+='  ';
                    }
                }
                x+='\n';
            }
            console.log(x);
            break;
    }
}

function Trapezoid(b,h,k){
    var x='';
    switch(k){
        case 1://实心梯形
        for(var i=0;i<h;i++){
            for(var j=0;j<2*h;j++){
                if(j-i<=h&&j+i>=h&&i>1){
                    x+=b;
                }else{
                    x+='  ';
                }
            }
            x+='\n';
        }
        console.log(x);
            break;
            case 2://空心梯形
            for(var i=0;i<=h;i++){
                for(var j=0;j<=2*h;j++){
                    if((j+i==h||j-i==h||i==h)&&i>1||i==2&&(j+i<=5||j-i<=5)&&(j+i>=5||j-i>=5)){
                        x+=b;
                    }else{
                        x+='  ';
                    }
                }
                x+='\n';
            }
            console.log(x);
            break;
    }
}
//回字
function hui(b,h,k){
    var x='';
    for(var i = 0; i < h; i++){
        for(var j = 0; j < h; j++){
            if(i>0&&i<h-1&&j>0&&j<h-1){
                if(i>2&&i<h-3&&j>2&&j<h-3){
                    if (i>=4&&i<=h-5&&j>=4&&j<=h-5) {
                        x+="  ";
                    }else{
                        x+=b;
                    }                       
                }else{
                    x+='  ';
                }
            }else{
                x+=b;
            }
        }
        x+='\n';
    }
    console.log(x);
    }

function main(id,a,h,k){
    var b;
    switch(a){
        case 1:
            b=' *';
            break;
        case 2:
            b=' -';
            break;
        case 2:
            b=' #';
            break;    
    }
    switch(id){
        case 1:
            square(b,h,k);
            break;
        case 2:
            Triangle(b,h,k);
            break;
        case 3:
            diamond(b,h,k);
            break;
        case 4:
            Trapezoid(b,h,k);
            break;
        case 5:
            hui(b,h,k);
            break;
    }

}
const readline = require('readline');
async function input(msg) {
    return await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(msg, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}
(async () => {
    var id = await input("请输入图形:1.正方形 2.三角形 3.菱形 4.梯形 5.回字\n");
    var a = await input("请输入符号:1.* 2.- 3.#\n");
    var h = await input("请输入高度:\n");
    var k = await input("是否实心:1.实心 2.空心\n");
    main(Number(id),Number(a),Number(h),Number(k));
})();

