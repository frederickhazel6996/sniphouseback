var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var orderSchema = new Schema({
    order_name: String,
    order_description: String,
    order_cost: Number,
    order_id: String,
    payment_type: String,
    buyer_name: String,
    buyer_address: String,
    buyer_email: String,
    delivery_date: String,
    payment_method: String,
    payment_amount: String,
    completed: { type: Boolean, default: false },
    date_created: String
});

var order = mongoose.model('order', orderSchema);

// make this available to our users in our Node applications
module.exports = order;
