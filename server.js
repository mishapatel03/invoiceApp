require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const customerController = require('./controller/customerController');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs',exphbs({
     extname: 'hbs', 
     defaultLayout: 'mainLayout',
     layoutsDir: __dirname + '/views/layouts/',
     runtimeOptions: {
        
              allowProtoPropertiesByDefault: true,
        
              allowProtoMethodsByDefault: true,
        
            } }));
app.set('view engine', 'hbs');

app.get('/product',(req,res)=>{
    res.render("employee/product",{
        viewTitle : "Insert Employee"});
});
app.get('/customerlist',(req,res)=>{
    res.render("employee/customers",{
        viewTitle : "Insert Employee"});
});
app.get('/',(req,res)=>{
    res.render("employee/customers",{
        viewTitle : "Insert Employee"});
});

app.listen(3000, () => {
    console.log('Express server started at port  : 3000');

});

app.use('/customer', customerController);
