var Human = function(type){
    this.type = type || 'human';
};
Human.isHuman = function(human){
    return human instanceof Human;
}
Human.prototype.breathe = function(){
    console.log('h-a-a-a-m');
}
var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments); //상속받는 부분
    this.firstName = firstName;
    this.lastName = lastName;
};
Zero.prototype = Object.create(Human.prototype);//상속받는 부분
Zero.prototype.constructor = Zero; //상속하는 부분
Zero.prototype.sayName = function(){
    console.log(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero);


//ES2015
class Human{
    constructor(type='human'){
        this.type = type;
    }

    static isHuman(human){//클래스함수
        return human instanceof Human;
    }

    breathe(){
        console.log('h-a-a-a-m');
    }
}

class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);