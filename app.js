const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const swig = require('swig');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27018/blog',(err)=>{
if(err){console.log('请求失败');}
else{
  console.log('请求成功');
app.listen(8081);
}

});



