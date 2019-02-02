var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    tags:[{tag: String}],
    venue:String,
    coordinates:[{x:Number, y:Number}],
    duration:String,
    image:String,
    price:String,
    
}, {collection: 'events'});

const Events = mongoose.model('events', eventsSchema);
module.exports = Events;
