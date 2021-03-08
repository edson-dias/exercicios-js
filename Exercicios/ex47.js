const isNumberInsideRange = (num, min, max, inclusive=false) => {
    if (inclusive) return num >= min && num <= max
    return num>min && num<max
}

console.log(isNumberInsideRange(4, 3, 7, false))