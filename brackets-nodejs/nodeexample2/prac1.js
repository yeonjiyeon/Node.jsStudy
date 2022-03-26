function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    
    }
}

// 함수 호출 전
let menu = {
    width : 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);

// 함수 호출 후
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };