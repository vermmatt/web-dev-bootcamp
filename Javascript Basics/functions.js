function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    if(num > 0) {
        for (var i = num - 1; i > 0; i--) {
            num*=i;
        }
        return num;
    } else {
        return 1;
    }
}

function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}