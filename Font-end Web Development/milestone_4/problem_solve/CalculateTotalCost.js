const calculateSum = (arr) => {
    return arr.reduce((total, current) => {
        return total + current;
    }, 0);
}

// try it
console.log(calculateSum([1, 2, 3, 4, 5]));