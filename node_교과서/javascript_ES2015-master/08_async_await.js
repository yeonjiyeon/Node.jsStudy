//ES2015 콜백함수 프로미스로 바꾸기
function findAndSaveUser(Users) {
    Users.findOne({}).then((user) => {
        user.name = 'zero';
        return user.save();
    }).then((user) => {
        return Users.findOne({ gender: 'm' });
    }).then((user) => {
        //생략
    }).catch(err => {
        console.error(err);
    });
}

//ES2017
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        //생략
    } catch (error) {
        console.error(err);
    }
}

//화살표함수
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        //생략
    } catch (error) {
        console.error(err);
    }
};

//ES2018 for문 + async/await
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async() => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();
//for awia of 배열을 순화한다
async function findAndSaveUser(Users) {
    //생략   
}
findAndSaveUser().then(() => {/* 생략*/});
//또는
async function other(){
    const result = await findAndSaveUser();
}