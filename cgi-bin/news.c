#include <stdio.h>
#include <stdlib.h>
#include "sqlite3.h"

int display(void  *para, int col_count, char  **col_value, char  **col_name){
    printf("<div class='item'>");
    printf("<div class='title'>%s</div>\n",col_value[1]);
    printf("<div class='time'>%s</div>",col_value[3]);
    printf("<div class='content'>%s</div>\n",col_value[2]);
    printf("</div>\n");
    return 0;
  }
int choice(sqlite3 *db)
{
    char *id=getenv("QUERY_STRING");
    char *err;
    char sql[100];
    sprintf(sql,"SELECT * FROM news WHERE id =%d",atoi(id));
    if(0!=sqlite3_exec(db,sql,display,NULL,&err)){
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
}
int main(){
    printf("Content-Type: text/html\n\n");
    char *header = "<!doctype html>"\
                                        "<html>"\
                                        "<head>"\
                                        "<meta name='viewport' centent='width=device-width'>"\
                                        "<meta charset='UTF-8'>"\
                                        "<title>新闻</title>"\
                                        "</head>"\
                                        "<body>";
    printf("%s\n",header);
    printf("<style>"\
                    "a{color: black;}"\
                    "div{text-align:center}"
                    "li{list-style:none;}"\
                    "body{background-color:#E6E6FA;}"\
                    "</style>" );
    printf("<div style='line-height:4;color:#000000;background-color:	#FFA500;text-align:center;'>新闻内容</div>");

    sqlite3  *db=NULL;
    int res = sqlite3_open("cms.db",&db);
    if(res!=0){
        printf("open db fail\n");
        return -1;
    }

    choice(db);
    sqlite3_close(db);
    printf("</body></html>");
    return 0;
}