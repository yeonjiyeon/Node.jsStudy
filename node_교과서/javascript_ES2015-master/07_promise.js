const condition = true; //true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {//프로미스 객체생성
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

//다른 코드가 들어갈 수 있음
// promise.then((message) =>{
//     console.log(message);//성공(resolve)한 경우 실행
// }).catch((error) => {
//     console.log(error);//실패(reject)한 경우 실행
// }).finally(() => {//끝나고 무조건 실행
//     console.log('무조건');
// });
//이어붙이기
promise.then((message) =>{
    return new Promise((resolve, reject) => {
        resolve(message);
    });
}).then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
}).then((message3) => {//return해야만 받는 것이 가능 따라서 메시지는 3개가 찍힌다
    console.log(message3);  
}).catch((error) =>{
    console.log(error);
});


function findAndSaveUser(Users){
    Users.findOne({}, (err, user) => {//첫 번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) =>{//두 번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'}, (err, user) => {//세 번째 콜백
                //생략
            });
        }); 
    });
}


//ES2015 콜백함수 프로미스로 바꾸기
function findAndSaveUser(Users){
    Users.findOne({}).then((user) => {
        user.name = 'zero';
        return user.save();
    }).then((user) => {
        return Users.findOne({gender:'m'});
    }).then((user) => {
       //생략
    }).catch(err => {
        console.error(err);
    });
}

//프로미스 여러 개를 한 번에 실행하는 법
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2]).then((result) =>{
    console.log(result); //['성공1', '성공2'];
}).catch((error) => {
    console.error(err);
});
