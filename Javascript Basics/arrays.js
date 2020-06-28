function printReverse(array) {
    for(var i = array.length -1;i >= 0; i--) {
        console.log(array[i])
    }
}

function isUniform(array) {
    var first = array[0];
    for(var i = 1; i < array.length; i++) {
        if(array[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

function max(array) {
    var mx = 0;
    for(var i = 1; i < array.length; i++) {
        if(array[i] > mx) {
            mx = array[i];
        }
    }
    return mx;
}