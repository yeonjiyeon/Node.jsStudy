var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + ' 는 \''+ result + '\'';
//'\'' 작은 따옴표를 이스케이프하기 위해 사용
console.log(string1);

//ES2015에서는 ``사용가능
var num3 = 1;
var num4 = 2;
var result2 = 3;
var string2 = `${num3} 더하기 ${num4} 는 '${result2}'`;
//'\'' 작은 따옴표를 이스케이프하기 위해 사용
console.log(string2);