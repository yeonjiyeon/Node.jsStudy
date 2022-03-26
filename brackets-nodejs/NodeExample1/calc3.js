/**
 * 4장 Calc3
 * 
 * 모듈
 * 더하기 함수가 들어있는 calc3 모듈
 */
var util = require('util'); //util모듈 불러오기
var EventEmitter = require('events').EventEmitter;//events모듈 불러온 뒤 EventEmitter객체호출

var Calc = function(){
    var self = this;//프로토타입에서의 this는 자기 자신을 가리킴
    this.on('stop', function(){
        console.log('Calc에 stop event 전달됨.');
    });
};

util.inherits(Calc, EventEmitter);//Calc에서 이벤트처리를 할 수 있도록 EventEmitter객체상속
Calc.prototype.add = function(a, b) { //Calc을 프로토타입객체로 만든다
    return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';