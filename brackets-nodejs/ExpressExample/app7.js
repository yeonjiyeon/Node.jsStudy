/**
 * POST 방식으로 전달된 파라미터 확인하기
 * (1) 웹 브라우저에서 http://localhost:3000/public/login.html 페이지 열고 요청
 * http://localhost:3000/login.html
 * (2) 크롬 브라우저의 Postman 앱이나 기타 POST 요청 도구를 사용하여 POST 방식으로 요청
 *     GET 방식으로 요청 시에는 웹브라우저에서 아래 URL로 요청해야 함
 *         http://localhost:3000?id=test1&password=123456
 */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')//클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출
  , static = require('serve-static');
  //특정폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어줌

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded(서버로 보내는 데이터) 파싱
app.use(bodyParser.urlencoded({ extended: false }))//req에 body속성이 추가
//extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 
//객체 안에 객체를 파싱할 수 있게하려면 true.


// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));
//public 파일의 루트패스로 접근가능--> http://localhost:3000/login.html

// 미들웨어에서 파라미터 확인
app.use(function(req, res, next) {
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	var paramId = req.body.id || req.query.id; //body:post, query:get
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.end();
});


// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
