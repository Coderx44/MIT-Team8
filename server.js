
const express = require('express');
const app = express();
const path = require('path');
const data = require('./StockList.json')
const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
app.use('/css',express.static('css'));

// app.use(express.static(__dirname + '/assets/'));
const urlencoder=bodyparser.urlencoded({extended:false});

app.get('/', async (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/data', async (req, res) =>{
    res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
console.log('HI');
app.listen(3000);