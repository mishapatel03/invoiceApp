const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
   
    discount: {
        type: Number
    },
    finalTotal: {
        type: Number
    },
    selectt: {
        type: Number
    }
    
});

mongoose.model('Employee', employeeSchema);
