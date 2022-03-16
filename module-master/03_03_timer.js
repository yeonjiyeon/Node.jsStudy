//setTimeout: 주어진 밀리초 이후에 콜백 함수 실행
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

//setTimeout: 주어진 밀리초마다 콜백 함수 반복 실행
const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    //clearTimeout:setTimeout을 취소
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

//immediate:콜백 함수 즉시 실행
const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
});

//clearImmediate: setImmediate을 취소
clearImmediate(immediate2);