/**
 * 4장 Test 2
 * 
 * event 사용하기
 */

 process.on('exit', function(){//on(이벤트,리스너): 지정한 이벤트에 리스너를 추가
    //process객체는 내부적으로 emitemitter를 상속받을 수 있도록 되어 있음
    console.log('exit 이벤트 발생함');
 });

 setTimeout(function(){
     console.log('2초 후에 시스템 종료 시도함');
     process.exit();
 },2000);