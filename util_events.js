
var events = require('events');
var util = require('util');

var Fruits = function(name){
    this.name=name;
}

util.inherits(Fruits,events.EventEmitter);

var mango = new Fruits("mango");
var grapes = new Fruits("grapes");
var orange = new Fruits("orange");

var fruitsList = [mango,grapes,orange];

fruitsList.forEach(function(fruit){
    fruit.on('colorOfFruit',function(color){
        console.log(fruit.name + " has " + color + " color");
    });
});

mango.emit('colorOfFruit','yellow');
grapes.emit('colorOfFruit','green');
orange.emit('colorOfFruit','orange');