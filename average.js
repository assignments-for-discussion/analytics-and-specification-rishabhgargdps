function average(numbers) {
    //average is computed as sum / count where count excludes the NaN
    let sum = 0;
    let count = numbers.length;
    let maxValue = Math.max(...numbers);
    let minValue = Math.min(...numbers);
    let variation = maxValue - minValue;
    // variation is computed as maximum number - minimum number
    if (variation > 0.95 * maxValue) {
        return NaN;
    }

    numbers.map((val, i) => {
        if (isNaN(val)) {
            count -= 1
        } else {
            sum += val;
        }
    })
    return sum / count
}

module.exports = { average };