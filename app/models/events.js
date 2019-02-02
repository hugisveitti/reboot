var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    title: String,
    description: String,
    date: String,
    tags:[{tag: String}],
    venue:String,
    lng:String,
    lat:String,
    duration:String,
    
    image:String,
    price:String,
    startTime:String,

}, {collection: 'events'});

const Events = mongoose.model('events', eventsSchema);
module.exports = Events;
