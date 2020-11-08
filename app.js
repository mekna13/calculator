const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const add = require('./add');
const sub = require('./sub');
const multi = require('./multi');
const div = require('./div');
//=======================================
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//============= ROUTES ==================

app.get('/' , (req , res) => {
    let ans = 0;
    res.render('index' , { ans });
})

app.post('/' , (req , res ) => {
    
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    const op = req.body.op;
    let ans=0;

    if( op == 'add'){
        ans = add.add(num1,num2);
    }
    else if( op == 'sub'){
       ans = sub.sub(num1,num2);
    }
    else if(op == 'div'){
        ans = div.div(num1,num2);
    }
    else if(op == 'multi'){
        ans = multi.multi(num1,num2);
    }
    res.render('index', { ans });
})








app.listen("3000",function(){

    console.log("serving app.js in port 3000");

});

