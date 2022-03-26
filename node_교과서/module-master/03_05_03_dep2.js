const dep1 = require('./03_05_03_dep1');
console.log('require dep1', dep1);
module.exports = () => {
    console.log('dep1', dep1);
};