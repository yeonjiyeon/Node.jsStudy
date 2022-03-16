const http = require('http');
http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); //헤더
    //          성공적 요청  응답에 대한 정보
    res.write('<h1>Hello Node!</h1>'); //본문
    res.end('<p>Hello Server!</p>'); //응답종료메서드
})
.listen(8080, () => {// 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
});