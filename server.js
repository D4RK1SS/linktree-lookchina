const path = require('path')
const express = require('express');
const app = express();
const PORT = 8081;

app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(PORT,() => {
  console.log('200');
});


