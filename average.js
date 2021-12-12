function average(numbers) {
    const array_filter_NaN = numbers.filter(value => !Number.isNaN(value));
    return array_filter_NaN.reduce((p, c) => p + c, 0) / array_filter_NaN.length;
}

module.exports = { average };