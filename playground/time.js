var moment = require('moment');


// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

var date = moment();
console.log(date.format('hh:mm a'));


var sometime = moment().valueOf();
console.log(sometime);
var date = moment(sometime);
console.log(date.format('h:mm a'));
