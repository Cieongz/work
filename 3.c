#include <stdio.h>

struct User{
    char name[20];
    int age;
    int  sex;
};
struct User  users[100];
int count=0,i;

int add()//新增会员
{
    printf("请输入名字:\n");
    scanf("%s",users[count].name);
    printf("请输入年龄:\n");
    scanf("%d",&users[count].age);
    printf("请输入性别:\n");
    scanf("%d",&users[count].sex);
    printf("--------添加成功--------\n");
    printf("名字:%s 年龄:%d 性别:%d\n",users[count].name,users[count].age,users[count].sex);
    count++;
    return 0;
}

int see()//查看会员
{
    int i;
    printf("-----查看会员-----\n 1.查看所有会员\n 2.查看某个会员\n");
    scanf("%d",&i);
    int d;
    switch(i)
    {
        case 1:
        for(int a=0;a<count;a++){
            printf("名字:%s 年龄:%d 性别:%d\n",users[a].name,users[a].age,users[a].sex);
        };
        break;
        case 2:
        printf("请输入查询编号:\n");
        scanf("%d",&d);
        if(d>0)
        {
            printf("姓名:%s\n",users[d-1].name);
            printf("年龄:%d\n",users[d-1].age);。break
            printf("性别:%d\n",users[d-1].sex);
        }else{
            printf("输入大于0的数字\n");
        }
        break;
    }
}

int upa()
{
    int w;
    printf("修改第几个人:\n");
    scanf("%d",&w);
    printf("输入姓名:\n");
    scanf("%s",users[w-1].name);
    printf("输入年龄:\n");
    scanf("%d",&users[w-1].age);
    printf("输入性别:\n");
    scanf("%d",&users[w-1].sex);
    printf("修改成功");
}

int del()//删除会员
{
    int s;
    printf("请输入删除编号:\n");
    scanf("%d",&s);
    for(s=0;s<count;s++)
    {
        users[s]=users[s+1];
        count--;
    }
    printf("删除成功\n");
}

int main()
{
    int flag=1;
    while(flag)
    {
        printf("----主菜单----\n 1.新增会员\n 2.查看会员\n 3.修改会员\n 4.删除会员\n 5.退出\n");
        int i;
        scanf("%d",&i);
        switch(i)
        {
            case 1:add();
            break;
            case 2:see();
            break;
            case 3:upa();
            break;
            case 4:del();
            break;
            case 5:flag=0;
            break;
        }

    }
    return 0;
}