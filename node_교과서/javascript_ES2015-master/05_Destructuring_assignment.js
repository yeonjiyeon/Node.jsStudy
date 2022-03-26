var candyMachine = {
    status:{
        name:'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

//ES2015
const candyMachine = {
    status:{
        name:'node',
        count:5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};
const{getCandy, status:{count}} = candyMachine;

//배열에서의 구조분해할당
var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

//ES2015
const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array;
