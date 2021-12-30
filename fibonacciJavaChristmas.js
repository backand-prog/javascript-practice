function sumOddFibonacciNumbers(num) {
    let prevNum = 0;
    let actNum = 0;
    let sum = 0;
    while (num > actNum) {
        if(actNum == 0) {
            console.log(actNum);
            actNum++;
        } else {
            if (actNum % 2 == 1) {
                sum += actNum;
            }
            console.log(actNum);
            actNum = prevNum + actNum;
            prevNum = actNum - prevNum;
        }
    }
    
    return sum;
}


console.log(sumOddFibonacciNumbers(10));