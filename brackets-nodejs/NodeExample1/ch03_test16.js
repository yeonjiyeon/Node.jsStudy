/**
 * 3장 Test 16
 * 
 * 함수가 결과값으로 리턴됨
 */
function add(a,b,callback){//콜백함수: 함수가 실행되는 중간에 호출되어 상태 정보 OR 전달 결과값처리
    var result = a + b;
    callback(result);// 콜백함수를 사용하면 다른 함수도 중간에 사용할 수 있음
    var history = function(){
        return a + ' + ' + b + ' = ' + result; 
    };
    return history;//반환값으로 함수실행
}

var add_history = add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
	console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과값으로 받은 함수 실행 결과 : ' + add_history());