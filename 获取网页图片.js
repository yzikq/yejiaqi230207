// 下包
// npm i request
// npm i cheerio

const request = require('request') // 导入模块
const fs= require('fs') // 导入模块
/*
request('https://www.baidu.com',function(error,response,body){
    console.log('error:',error) // 输出报错信息
    console.log('statusCode:',response && response.statusCode) // 输出收到的响应状态码
    console.log('body:',body) // 输出这个网页的html内容
})
*/
request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('logo1.png'))