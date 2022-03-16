const os = require('os');
console.log('운영체제 정보---------------------------------');
console.log('os.arch()',os.arch());
console.log('os.platform()',os.platform());
console.log('os.type()',os.type());
console.log('os.uptime()',os.uptime());//운영체제 부팅이후 운영시간
console.log('os.hostname()',os.hostname());//컴퓨터 이름
console.log('os.release()',os.release());//운영체제버전

console.log('경로------------------------------------------');
console.log('os.homedir()',os.homedir());//홈디렉터리
console.log('os.tmpdir()',os.tmpdir());//임시 파일 저장경로

console.log('cpu 정보------------------------------------------');
console.log('os.cpus()',os.cpus());//컴퓨터 코어정보
console.log('os.cpus().length',os.cpus().length);

console.log('메모리  정보------------------------------------------');
console.log('os.freemem()',os.freemem());//사용가능 메모리
console.log('os.totalmem()',os.totalmem());//전체 메모리용량