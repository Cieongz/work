#include <stdio.h>

typedef struct
{
    char name[20];
    int age;
    int  sex;
}user;

int add(int *count ,user  *u)//添加会员
{
    printf("请输入名字:\n");
    scanf("%s",u->name);
    printf("请输入年龄:\n");
    scanf("%d",&u->age);
    printf("请输入性别:\n");
    scanf("%d",&u->sex);
    printf("--------添加成功--------\n");
    printf("姓名:%s 年龄:%d 性别:%d\n",u->name,u->age,u->sex);
    (*count)++;
}

int see(int i,user *u)//查看会员
{
            printf("姓名:%s\n",u->name);
            printf("年龄:%d\n",u->age);
            printf("性别:%d\n",u->sex);
}

int modify(int w,user *u){ //修改会员
    printf("请输入会员姓名:\n");
    scanf("%s",u->name);
    printf("请输入会员年龄:\n");
    scanf("%d",&u->age);
    printf("请输入会员性别:\n");
    scanf("%d",&u->sex);
    printf("--------修改成功--------\n");
}

int delete(user *u1,user *u2){//删除会员
    *u1=*u2;
}

int main()
{
    int count=0;
    user u[100];
    int add();
    int see();
    int q,w,x;
    int modify();
    int delete();
    int flag=1;
    while(flag)
    {
        printf("----主菜单----\n 1.新增会员\n 2.查看会员\n 3.修改会员\n 4.删除会员\n 5.退出\n");
        int i;
        scanf("%d",&i);
        switch(i)
        {
            case 1://添加会员
            add(&count,&u[count]);
            break;
            case 2://查看会员
            printf("--------菜单--------\n1.查看全部会员\n2查看某个会员\n");
            scanf("%d",&i);
            switch(i){
            case 1:
            for(int a=0;a<count;a++){
                see(a,&u[a]);
            };//查看所有会员
            break;
            case 2:
            printf("请输入需要查询的编号:\n");
            scanf("%d",&q);
            if(q>0){
                see(q-1,&u[q-1]);
            } else{
                printf("请输入大于1的编号\n");
            }//查看某个会员
            break;
            }
            break;
            case 3://修改会员
            printf("要修改第几个人:\n");
            scanf("%d",&w);
            modify(w-1,&u[w-1]);
            break;
            case 4://删除会员
            printf("请输入要删除的编号:");
            scanf("%d",&x);
            for(x;x<count;x++){
                delete(&u[x],&u[x+1]);
                count--;
            } 
            break;
            case 5://退出
            flag=0;
            break;
        }
    }
    return 0;
}
 
