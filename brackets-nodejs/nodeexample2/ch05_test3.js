/**
 * 5장 Test 3
 * 클라이언트 요청을 받았을 때 응답 보내기
 */
var http = require('http');

// 웹서버 객체를 만듭니다.
var server = http.createServer();

// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다
var port = 3000;
server.listen(port, function(){
    console.log('웹서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket){//클라이언트 주소,포트(랜덤)뿌려주기
    console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});


// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});//응답으로 만들 헤더
        //상태 코드를 지정, 두번째인수에 헤더 정보를 연관 배열로 정리한 것

    //write 응답본문데이터
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("    <title>응답 페이지</title>");
    res.write("</head>");
    res.write("  <body>");
    res.write("    <h1>노드제이에스로부터의 응답 페이지</h1>");
	res.write("  </body>");
    res.write("</html>");
    res.end();
});

// 서버 종료 이벤트 처리
server.on('close', function(){
    console.log('서버가 종료됩니다.');
});
