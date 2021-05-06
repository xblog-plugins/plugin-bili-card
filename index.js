// 使用博客系统提供的接口
const widget =xBlog.widget
const file =xBlog.static
const database =xBlog.database

// 一些字段
const dbUser = ""

// 注册静态文件
file.staticFile("icon/icons.png")
file.staticFile("icon/level.png")
file.staticFile("icon/user-auth.png")

// 添加卡片
widget.addSide(true,"","index.html",function () {
    // 初始化数据库链接
    let db = database.newDb()
    return {
        uid: '343147393',
        nickname: '小游',
        sign: '二次元技术宅',
        avatar: '//i0.hdslb.com/bfs/face/a44e34ef9a2fa3415ceb6ce25f29d1ddf9294518.jpg',
        hang: '//i1.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png',
        level: 5,
        sex: '男',
        isVip: 1,
        auth: 'bilibili个人认证:一个永远都火不了的Up主',
        fans: 50,
        watch: 100,
        view: 10,
        server: 'http://127.0.0.1:2333/static/sideBiliCard/icon'
    }
},true)
