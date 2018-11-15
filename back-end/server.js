var express = require('express');

var mysql = require('mysql');

var app = express();

//跨域
app.use(function (req,res,next) {
    console.log('这个进来了吧');
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers', 'content-type');
    next();
})

// var client = mysql.createConnection({
//     host: '10.36.134.27',
//     user: 'root',
//     password: '',
//     database : 'elm'
// });

//登录
app.post('/login',function(req,res){
    console.log(body);
    var body = '';

    var client = mysql.createConnection({
        host: '10.36.134.27',
        user: 'root',
        password: '',
        database : 'elm'
    });

    req.on('data',function(chunk){
        body += chunk;
    });

    req.on('end',function(){
        console.log('==============================')
        body = JSON.parse(body);
        var username = body.username;
        var password = body.password;
        client.connect();
        var sql = `select * from user where username = '${username}' and password = '${password}'`;
        console.log(sql);
        console.log('万能的分割线啊hahahahahahh------------------------------------------');
        client.query(sql,function(err,results,fields){
            if(err){
                console.log(err);
                return res.send({code:-1,msg: '登录失败'});
            }else{
                if(results.length > 0){
                    return res.send({code:0,msg:'登录成功'});
                    res.cookie('username',username,{
                        maxAge: 1000*60*30,
                    });
                    //实现页面跳转的关键步骤
                    // res.redirect('/');
                    console.log(results);
            }else{
                return res.send({code:-2,msg:'用户名或密码错误'});
                }
                console.log(results);
                console.log(fields);
            }
            client.end();
        });
    })
    // var username = req.body.username;
    // var password = req.body.password;
    // client.connect();
    // var sql = `select * from user where username = '${username}' and password = '${password}'`;
});

//注册
app.post('/register',function(req,res){
    console.log(body);
    console.log('万能的分割线啊------------------------------------------');

    var body = '';
    var client = mysql.createConnection({
        host: '10.36.134.27',
        user: 'root',
        password: '',
        database : 'elm'
    });

    req.on('data',function(chunk){
        body += chunk;
    });

    req.on('end',function(){
        body = JSON.parse(body);
        var userName = body.username;
        var passWord = body.password;
        console.log(userName);
        console.log(passWord);
        client.connect();
        var sql = `insert into user (username,password) values ('${userName}' ,'${passWord}' )`;
        // INSERT INTO `user`(`id`, `username`, `password`) VALUES ([value-1],[value-2],[value-3])
        console.log(sql);
        console.log('万能的分割线啊hahahahahahh------------------------------------------');
        client.query(sql,function(err,results,fields){
            if(err){
                console.log(err);
                console.log('万能的分割线啊------------------------------------------');

                return res.send({code:-1,msg: '注册失败'});
            }else{
                // if(results.length > 0){
                    return res.send({code:0,msg:'注册成功'});
                //     console.log(results);
                // }else{
                //     res.send({code:-2,msg:'用户名或密码错误'});
                // }
                console.log(results);
               console.log('万能的分割线啊------------------------------------------');
            }
            client.end();
        });
    })
    // var username = req.body.username;
    // var password = req.body.password;
    // client.connect();
    // var sql = `select * from user where username = '${username}' and password = '${password}'`;

});

// app.get('/',function(){

// });

app.get('/address', function (req, res) {
  var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    port: 3306,
    //数据库名称                 
    database: 'elm'
  })


  req.on('data', function (chunk) {
    // body += chunk; 
    // console.log(body)
  });

  req.on('end', function () {
    var userName = req.query.username;
    var iphone = req.query.iphone;
    var numdoor = req.query.numdoor;
    var address = req.query.address;
    // console.log(userName);
    // console.log(iphone);
    // console.log(body);
    console.log('数据库称呼了吗--------------------------0');
    client.connect();
    console.log('连接成功');
    var sql = `INSERT INTO user(username,iphone,address,numdoor) VALUES ("${userName}","${iphone}","${address}","${numdoor}")`;
    // INSERT INTO `user`(`id`, `username`, `password`) VALUES ([value-1],[value-2],[value-3])
    console.log(sql);
    client.query(sql, function (err, results, fields) {
      if (err) {
        console.log(err)
        res.send({ code: -1, msg: '添加失败' });
      } else {
        res.send({ code: 0, msg: '添加成功' });
      }
      client.end();
    });
  })
});

app.listen(3000)
console.log('服务启动成功 http://10.36.134.27:3000')
