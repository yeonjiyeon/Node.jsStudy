console.log('require가 가장 위에 오지 않아도 됩니다.');
module.exports = '저를 찾아보세요.';
require('./02_01_var');
console.log('require.cache입니다.');
console.log(require.cache);//파일 이름들이 속성명으로 들어감
console.log('require.main입니다.');
console.log(require.main === module);//노드 실행시 첫모듈
console.log(require.main.filename);