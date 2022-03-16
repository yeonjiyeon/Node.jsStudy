function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not(x) {
    return !x;
}

const not2 = x => !x;


//this 바인딩 방식 비교
var relationship1 = {
    name:'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends:function(){
        var that = this;//this=relationship1
        this.friends.forEach(friend => {
            console.log(that.name, friend);
            //this의 대상이 바뀜으로 변수를 이용해 relationship1에 간접접근한다
        });
    },
};
relationship1.logFriends();


//ES2015
const relationship2 = {
    name:'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();