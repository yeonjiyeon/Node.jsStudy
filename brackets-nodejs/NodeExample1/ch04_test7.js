/**
 * 4장 Test 7
 * 
 * FS 사용하기 : 파일 쓰기
 */

 var fs = require('fs');

 //파일에 데이터를 씁니다.
 fs.writeFile('./output.txt','Hello World!', function(err){//오류가 발생하면 콜백함수로 오류전달
     if(err){
         console.log('Error: ' + err);
     }
     console.log('output.txt파일에 데이터 쓰기 완료');
 });