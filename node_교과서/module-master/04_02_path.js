const path = require('path');
const string = __filename;
console.log('path.sep:', path.sep);//경로구분자
console.log('path.delimiter:', path.delimiter);//환경변수구분자
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));//경로
console.log('path.extname():', path.extname(string));//확장자
console.log('path.basename():', path.basename(string));//파일이름
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({//합치기
    dir: 'C:\\users\\zerocho',
    name:'path',
    ext:'.js'
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));//정상경로로 반환
console.log('------------------------------');
console.log('path.isAbsolute(c:\\):', path.isAbsolute('c:\\'));//절대경로인지 상대경로인지
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
//첫번째 경로에서 두번째 경로로 가는법알려줌
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resove(__dirname, '..', 'users', '.', '/zerocho'));