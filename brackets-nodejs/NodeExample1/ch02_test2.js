console.log('argv 속성의 파라미터 수:'+ process.argv.length);
//argv - argument Vector의 약자입니다. 가변적인 갯수의 문자열
//프로그램을 실행할 때 전달하는 파라미터수
//    node ch02_test2.js
//index 1   2

console.dir(process.argv);

if(process.argv.length > 2){
    console.log('세번째 파라미터값:%s',process.argv[2]);
}

process.argv.forEach(function(item,index){
    console.log(index + ':',item);
});

