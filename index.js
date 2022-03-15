const studentInfo = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${studentInfo.vorname} and I'm in the ${studentInfo.campus} campus.`,
    e : "^^",
    T : "U "
}));

// or cowsay.think()