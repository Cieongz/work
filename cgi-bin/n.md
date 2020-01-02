# sqlite3 安装
- 下载安装包并解析
- 获得四个文件 shell.c sqlite3 sqlite3.h sqlite3ext.h
- gcc -c sqlite3.c 
- gcc shell.c sqlite3.c -lpthread -ldl -o sqlite3
- 创建sqlite cms.db 数据库
- 创建表  CREATE TABLE IF NOT EXISTS news(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      created_at TEXT
  ); 
# apache2 的配置
-  终端下载Apache2
-  找到var下面的www文件,打开并创建cgi-bin文件夹 
-  找到etc文件下的server-cgi-bin,将地址改为var下的www文件
-  在etc下的apache里打开终端
-  用最高权限输入三条软链接ln -s /etc/apache2/mods-available/cgid.conf /etc/apache2/mods-enabled/cgid.conf      ln -s /etc/apache2/mods-available/cgid.load /etc/apache2/mods-enabled/cgid.load     ln -s /etc/apache2/mods-available/cgi.load /etc/apache2/mods-enabled/cgi.load
-  重启apache
-  在cgi-bin文件下写.c文件,并编译成.cgi文件
# 增删改查
- 创建结构体
- 初始化char的类型
- int insert(sqlite3 *db, Message message) {
    char *err;
    char sql[100];
    sprintf(sql, "INSERT INTO xxx",
            message.title,);
    if (0 != sqlite3_exec(db, sql, NULL, NULL, &err)) {
        printf("%s\n", err);
        exit(-1);
    }
    return 0;
}
- 进行编译(需加上sqlite3.c -lpthread -ldl)
