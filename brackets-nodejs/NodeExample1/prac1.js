//객체가 비어있는지 확인하기
// let schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }


//프로퍼티 합계 구하기
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);

//프로퍼티 값 두 배로 부풀리기
// 함수 호출 전
let menu = {
    width:200,
    height
}