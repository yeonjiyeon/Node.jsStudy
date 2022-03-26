// let user = {}

// user.name = "john";
// user['surname'] = "Smith";
// user.name = "pete";
// delete user.name;
// console.log(user.name);

isEmpty = function(obj){
    for(let key in obj){
        return false;
    }
    return true;
};
let schedule = {};
console.log( isEmpty(schedule));
schedule["8:30"] = "get up";
console.log( isEmpty(schedule));