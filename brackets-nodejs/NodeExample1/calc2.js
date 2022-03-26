var calc = {};//객체 생성
calc.add = function(a,b){//exports 메인파일에서 모듈파일을 불러드릴때 반환
    return a+b;
    };

module.exports = calc;