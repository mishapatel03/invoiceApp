const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',(req,res) => {
    res.render("employee/add",{
        viewTitle : "Insert Employee"

    });
});

router.post('/',(req, res) => {
    insertRecord(req,res);
});

function insertRecord(req,res){
    var employee = new Employee();
    
    employee.discount = req.body.discount;
    employee.finalTotal = req.body.finalTotal;
    employee.selectt = req.body.selectt;
    employee.save((err, doc) => {
        if(!err)
            res.redirect('customer/list');
        else{
            console.log('error during record insertion : ' +err);

        }
    });
}

router.get('/list', (req, res) =>{
  
    Employee.find((err, docs) =>{
        if(!err){
            res.render("employee/list", {
                list: docs
            });
        }
        else{
            console.log('Error in retrieving employee list:' + err);
        }
    });
});



module.exports = router;