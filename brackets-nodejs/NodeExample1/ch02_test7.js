/**
 * 4장 Test 7
 * 
 * os 모듈 사용하기
 */

 var os = require('os');//외부 모듈 os불러오기
 console.log('시스템의 hostname:%s',os.hostname());//운영체제 호스트이름
 console.log('시스템의 메모리 : %d / %d',os.freemem(),os.totalmem());
 //os.freemem() 시스템의 전체 메모리 용량
 //os.totalmem()시스템의 사용 가능한 메모리 용량
 console.log('시스템의 CPU 정보\n');
 console.dir(os.cpus());
 console.log('시스템의 네트워크 인터페이스 정보\n');
 console.dir(os.networkInterfaces());//배열객체형태