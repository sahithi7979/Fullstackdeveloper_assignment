const express = require('express')
const express1 = express()
const port = 3000
const path = require('path')

  express1.use('/static', express.static(__dirname + '/static'));
  express1.use(express.static(__dirname + '/static'));

  express1.get('/login', (req, res) => {
  res.sendFile(__dirname, '/static/login.html');
})

express1.get('/reg', (req, res) => {
  res.sendFile(__dirname, '/static/reg.html');
})

express1.put('/rese',(req,res)=>{
  res.sendFile(__dirname,'/static/reset.html');
})

express1.delete('/del',(req,res)=>{
  res.sendFile(__dirname,'/static/delete.html')
})

express1.get('/profile',(req,res)=>{
  res.sendFile(__dirname,'/static/profile.html')
})

express1.get('/product',(req,res)=>{
  res.sendFile(__dirname,'/static/flipkart.html')
})

express1.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})