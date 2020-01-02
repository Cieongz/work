#include <stdio.h>
#include <stdlib.h>
#include "sqlite3.h"

typedef struct{
    int id;
    char *title;
    char *content;
    char *created_at;
}NEWS;

int add(sqlite3 *db,NEWS new){
    char *err;
    char sql[100];
    new.title=malloc(sizeof(char));
    new.content=malloc(sizeof(char));
    new.created_at=malloc(sizeof(char));
    printf("请输入标题:\n");
    scanf("%s",new.title);
    printf("请输入内容:\n");
    scanf("%s",new.content);
    printf("请输入创建时间:\n");
    scanf("%s",new.created_at);
    printf("--------添加成功--------\n");
    printf("标题:%s 内容:%s 时间:%s\n",new.title,new.content,new.created_at);
    sprintf(sql,"INSERT INTO  news (title,content,created_at)VALUES('%s','%s','%s')",new.title,new.content,new.created_at);
    if(0!=sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
}

int callback(void *para,int col_count,char **col_value,char**col_name){
    for(int i=0;i<col_count;i++){
        printf("%s:%s\n",col_name[i],col_value[i]);
    }
    return 0;
}

int see (sqlite3 *db){
    char *err;
    char sql[] = "SELECT * FROM news";
    if(0 != sqlite3_exec(db,sql,callback,NULL,&err)) {
        printf("%s\n",err);
    }
    return -1;
}

int update(sqlite3 *db,NEWS new,int w){
    char *err;
    char sql[100];
    new.title=malloc(sizeof(char));
    new.content=malloc(sizeof(char));
    new.created_at=malloc(sizeof(char));
    printf("输入标题:\n");
    scanf("%s",new.title);
    printf("输入内容:\n");
    scanf("%s",new.content);
    printf("输入创建时间:\n");
    scanf("%s",new.created_at);
    printf("修改成功");
    sprintf(sql,"UPDATE news SET title ='%s',content ='%s',created_at ='%s' WHERE id =%d",new.title,new.content,new.created_at,new.id);
    if(SQLITE_OK!=sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
}

int delete (sqlite3 *db,int s){
    char *err;
    char sql[100];
    sprintf(sql,"DELETE FROM news WHERE id = %d",s);
    if(0 != sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
}

int main()
{
    sqlite3 *db=NULL;
    int res = sqlite3_open("cms.db",&db);
    if (res!=0){
        printf("open db fail\n");
        return -1;
    } 
    NEWS n;
    int w,s;
    int flag=1;
    while(flag)
    {
        printf("----主菜单----\n 1.新增新闻\n 2.查看新闻\n 3.修改新闻\n 4.删除新闻\n 5.退出\n");
        int i; 
        scanf("%d",&i);
        switch(i)
        {
            case 1:add(db,n);
            break;
            case 2:see(db);
            break;
            case 3:
            printf("修改第几个:\n");
            scanf("%d",&w);
            update(db,n,w);
            break;
            case 4:
            printf("请输入删除编号:\n");
            scanf("%d",&s);
            delete(db,s);
            break;
            case 5:flag=0;
            break;
        }
    }
   sqlite3_close(db);
   return 0;
}
