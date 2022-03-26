/**
 * 4장 Test 8
 * 
 * FS 사용하기 : 파일을 열어 데이터를 쓰고 파일 닫기
 * 파일시스템(fs)에서 바이너리 데이터들이 이동한다는걸 의미
 * open -> write -> close
 */

var fs = require('fs');

//파일에 데이터를 씁니다.
fs.open('./output.txt', 'w', function(err, fd) {
      //파일열기 
     //r 읽기 w 쓰기에 사용하는 플래그 w+ 읽기와 쓰기에 모두 사용  a 읽기와 추가에 모두 사용
    if(err) throw err;

	var buf = new Buffer('안녕!\n');
	//Buffer클래스는 바이너리 데이터들의 스트림을 직접 다루기 위해 Node.js API에 추가
	/*
	이것과 비슷하게, 이미지나 비디오데이터 또한 바이너리 데이터로 저장하는 방식도 따로 
	정해져 있습니다. 
	이중에 핵심은, 컴퓨터는 모든 데이터를 바이너리 이진 데이터로 저장한다는 것입니다.
	*/ 
	//스트림:한 지점에서 다른 지점으로 이동하는 일련의 데이터

    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
	 //fd객체 전달받기,파일을 구별할 때 사용,파일에 데이터쓸 때 어느 위치에 전달할지   
	 if(err) throw err;
	    
	    console.log(err, written, buffer);
	    
	    fs.close(fd, function() {
	      console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
	    });
	});
});
