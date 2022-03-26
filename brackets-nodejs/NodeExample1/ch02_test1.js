/**
 * 2장 Test 1
 * 
 * console 객체 사용하기
 */

// 실행 소요 시간 측정하기
var result = 0;
console.time("duration_sum");//시작시간측정
for( var i = 1; i<=1000; i++){
    result += i;
}
console.timeEnd("duration_sum");//종료시간측정
console.log("1부터 1000까지:%d",result);
console.log('현재 실행한 파일의 이름 : %s', __filename);//파일이름출력
console.log('현재 실행한 파일의 패스 : %s', __dirname);//파일이 들어있는 폴더출력
var Person = {name:"소녀시대",age:20};//객체 생성
console.dir(Person);//dir 모든 속성보기

