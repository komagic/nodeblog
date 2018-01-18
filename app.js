const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const swig = require('swig');
const mongoose = require('mongoose');

app.use('/public',express.static(__dirname+'/public'));

app.use('/',require('../router/main'))

//定义引擎 
app.engine('html',swig.renderFile);

//设置模板文件存放目录，第一个参数必须是views，第二个存放的目录
app.set('views','./views');


//注册使用的模板引擎,第一个参数必须是view engine,
//第二个参数和app.engine 这个方法中定义的模板引擎的名称相同
app.set('view engine','html')

//取消缓存
swig.setDefaults({cache:false});



mongoose.connect('mongodb://localhost:27018/blog',(err)=>{
if(err){console.log('请求失败');}
else{
  console.log('请求成功8081');
app.listen(8081);
}

});



