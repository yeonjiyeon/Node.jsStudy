/**
 * 3장 Test 4
 * 
 * 익명 함수
 * 변수의 값으로 함수가 할당될 수 있음
 * 변수의 값으로 함수를 구분하므로 함수의 이름을 넣을 필요가 없음
 * 함수 선언문이 아니라 함수 표현식으로 추가함
 * 
 */
var calc = {};//객체생성
calc.add = function(a,b){//add속성 추가 및 함수 할당
return a+b;
}
console.log("모듈분리하기전 calc.add함수호출결과:%d",calc.add(10,10));
//console.log('더하기 (10, 10) : %d', result);
