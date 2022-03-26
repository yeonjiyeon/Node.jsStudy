/**
 * 익스프레스를 사용한 가장 단순한 샘플
 */
// Express 기본 모듈 불러오기
var express = require('express'),// express모듈은 http모듈위에서 존재 따라서 http모듈필요 
http = require('http');


// 익스프레스 객체 생성
var app = express();//익스프레스 객체에서 반환된 값을 app에 저장

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);//env서버모드설정

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){//get set설정 꺼내오기
    console.log('익스프레스 서버를 시작했습니다:' + app.get('port'));
});