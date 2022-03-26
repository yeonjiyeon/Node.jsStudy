console.log(this);
console.log(this === module.exports);
console.log(this === exports);
//최상위 스코프에 존재하는 this는 module.exports,exports 객체

function whatIsThis(){
    //함수 선언문 내부의 this는 global객체
    console.log('function', this === exports, this ===global);
}
whatIsThis();