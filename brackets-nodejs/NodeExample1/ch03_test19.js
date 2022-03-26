/**
 * 3장 Test 19
 * 
 * bind 사용하기
 */

var calc = {};//객체 생성
calc.hitCount = 0;//객체에 요소 추가
calc.add = function(a,b,callback){//콜백함수 사용
		var result = a + b;
		callback(result);

		this.hitCount++; //calc.hitCount

		console.log('add 함수의 컨텍스트');
		console.dir(this); //this = add
}

function onAddSuccess(result){
	console.log('onAddSuccess() 함수 호출됨.');
	console.log('onAddSuccess() 함수의 컨텍스트.');
	console.dir(this); //this = onAddSuccess

	console.log('더하기 (10, 10)의 결과 : %d', result);
	console.log('더하기의 결과 : %d, 조회 횟수 : %s', result, this.hitCount);
};

calculate = function (method,a,b) {
	console.log('calculate()함수 호출됨');
	if(method == 'add'){
		calc.add(a, b, onAddSuccess);
	}
}

calculate2 = function (method, a, b){
	console.log('calculate2()함수 호출됨');

	if(method == 'add') {
		calc.add(a, b, onAddSuccess.bind(calc));
	}
}

calculate('add', 10, 10); //조회수가 찍히지 않음
calculate2('add', 10, 10); //bind하여 조회수가 찍힘
calculate2('add', 10, 10);