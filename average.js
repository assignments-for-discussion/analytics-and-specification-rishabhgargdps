function average(numbers) {
    return numbers.reduce((p, c) => p + c, 0) / numbers.length;
    const newArr = numbers.filter(value => !Number.isNaN(value));
    return newArr.reduce((p, c) => p + c, 0) / newArr.length;
}

module.exports = { average };