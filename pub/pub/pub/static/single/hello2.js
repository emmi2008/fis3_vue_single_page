define('single/hello2', function(require, exports, module) {

var Vue = require("single/engine");


console.log(111);
console.log(Vue);


function test()
{

}
test.prototype.name = 'zky';
module.exports = test;

});
