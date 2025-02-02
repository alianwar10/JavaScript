function isPositiveEven(num)    {
    if (num < 0)   {
        return false;
    }
    else if (num > 0 && num % 2 === 0) {
        return true;
    }
    else    {
        return false;
    }

}

console.log(isPositiveEven(8));
console.log(isPositiveEven(-4));
console.log(isPositiveEven(7));