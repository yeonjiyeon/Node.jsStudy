/**
 * 4장 Test 13
 * http 모듈로 요청받은 파일 내용을 읽고 응답하기
 * FS와 Web의 응답을 pipe로 연결하기
 * pipe : 웹서버를 만들 때고 사용자 요청 처리할때 편리함
 * 지금 파일의 스트림객체와 웹파일의 스트림객체를 pipe로 연결하기
 */
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){//서버객체 만들기
    // 파일을 읽어 응답 스트림과 pipe()로 연결합니다.
    var instream = fs.createReadStream('./output.txt');//읽기스트림
    instream.pipe(res);//클라이언트로 데이터보낼 스트림과 연결
});
server.listen(7001, '127.0.0.1');
//// localhost의 7001 port에 웹 서버를 실행