/**
 * 4장 Test5
 * 
 * FS 사용하기
 * fs= file system
 */

 var fs = require('fs');//fs모듈받아오기 fs :파일 시스템에 접근

 // 파일을 동기식 IO 방식으로 읽어 들입니다. 동기식 IO: 파일처리가 끝날 때까지 대기
 var data = fs.readFileSync('./package.json', 'utf8'); //Sync이 붙으면 동기식

 // 읽어 들인 데이터를 출력합니다.
 console.log(data);