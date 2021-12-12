function average(numbers) {
    //filtering for NaN
    const filterNaN = numbers.filter(value => !Number.isNaN(value));
    let maxValue = Math.max(...numbers);
    let minValue = Math.min(...numbers);
    let variation = maxValue - minValue;
    // variation is computed as maximum number - minimum number
    if (variation > 0.95 * maxValue) return NaN;
    return filterNaN.reduce((p, c) => p + c, 0) / filterNaN.length;
}

module.exports = { average };