/**
 * 3장 Test 18
 * 
 * 프로토타입 객체 만들기
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.walk = function(speed) {//prototype 자바의 클래스와 유사하다, 상속을 위해 사용
	console.log(speed + 'km 속도로 걸어갑니다.');
}

var person01 = new Person('소녀시대', 20);
var person02 = new Person('걸스데이', 22);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);

