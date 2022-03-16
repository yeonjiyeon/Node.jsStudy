//ES2015 module
import {odd, even} from './02_01_var';
function checkOddOrEven(num){
    if(num % 2){// 홀수면
        return odd;
    }
    return even;
}

export default checkOddOrEven;