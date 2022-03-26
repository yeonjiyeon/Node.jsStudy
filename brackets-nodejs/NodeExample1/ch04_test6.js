/**
 * 4장 Test 6
 * 
 * FS 사용하기 : Non-Blocking IO
 */

 var fs = require('fs');

 //파일을 비동기식 IO 방식으로 읽어 들입니다.비동기식: 작업을 요청만 하고 그 다음 작업을 바로 수행
 fs.readFile('./package.json', 'utf8', function(err, data){
     //세번째 파라미터로 전달된 함수는 파일을 읽어 들이는 작업이 끝났을 때 호출

     //비동기적으로 읽으면 파일을 읽으면서 다른 작업도 동시에 수행할 수 있고,
     // 파일을 다 읽으면 매개변수 callback으로 전달한 함수가 호출됩니다.
     // 비동기 형식은 항상 마지막 인수가 수행 완료 시 호출할 콜백 함수로 작성되어야 합니다.

     // 읽어 들인 데이터를 출력합니다.
     console.log(data);
 });

 console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');