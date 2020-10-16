const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://taskdata:iQBOsohHzA6R0yvX@cluster0.amqix.mongodb.net/employees?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./customer.model');