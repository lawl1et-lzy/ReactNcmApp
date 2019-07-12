## 项目技术栈

react@16.8.2 + react-redux@7.1.0 + react-router-dom@5.0.1 + webpack@4.28.3 + axios@0.19.0 + node-sass@4.12.0 + redux-thunk@2.3.0

## 项目展示

<img src="https://s31.aconvert.com/convert/p3r68-cdx67/crhkp-oe9sm.gif" width="414" height="736"/>


## 项目运行

```
git clone --depth 1 https://github.com/lawliet-lzy/ReactNcmApp.git  

cd ReactNcmApp 

npm install 

npm start 
```

构建命令
```
npm run build (打包，部署)
```

## 项目概览
---
 |---- config/                      相关配置项            
 |---- public/                      公共资源            
 |---- scripts/                     脚本文件            
 |---- src/                         所有代码资源            
    |---- api/                      项目api使用接口            
    |---- components/               公有组件            
        |---- Footer/               底部标签导航组件            
        |---- Header/               头部组件            
        |---- SongListCom/          歌曲列表组件            
        |---- SongSheetList/        歌单列表组件            
        |---- UserInfo/             用户信息组件            
     |---- images/                  静态图片资源            
     |---- pages/                   所有页面            
        |---- Login/                登录页            
        |---- My/                   个人信息也            
        |---- SongList/             歌曲列表页            
        |---- SongSheet/            歌单列表页            
     |---- router/                  路由统一配置文件            
     |---- store/                   redux 全局 store仓库            
        |---- actions/              actions集合            
        |---- reducers/             reducers集合            
        |---- state/                初始化数据集合            
        |---- store/                单一 Store            
     |---- style/                   公用样式库            
     |---- util/                    工具类            
        |---- Api/                  axios 统一配置项            
        |---- flex/                 rem 配置文件            
 |---- package.json                 配置信息            
 |---- README.md                    说明文档            


## 网易云音乐 API
github 链接：https://github.com/Binaryify/NeteaseCloudMusicApi

## 环境要求

需要 NodeJS 8.12+ 环境

## 安装

```shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)

![文档](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/docs.png)