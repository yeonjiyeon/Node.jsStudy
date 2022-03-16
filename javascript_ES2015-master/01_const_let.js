if(true){
    var x = 3;//함수스코프
}
console.log(x);//블록밖에서도 사용가능

if(true){
    const y = 3;//블록스코프
}
console.log(y);//const,let 블록밖에서 사용불가능


const a = 0;
a = 1;// const 값변경불가능

let b = 0;
b = 1;//값변경가능

const c;//const 초기값 설정 필수