/**
 * 4장 Test 12
 * 
 * FS 사용하기 : 파이프 사용하기
 */
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    if(exists) {
        fs.unlink(outname, function(err){//outname 삭제함
            if(err) throw err;
            console.log('기존 파일[' + outname +'] 삭제함');
        });
    }

    var infile = fs.createReadStream(inname, {flags:'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});

    infile.pipe(outfile);//두 객체 연결로도 내용이 복사된다
    console.log('파일 복사[' + inname + '] -> [' + outname + ']');
    });