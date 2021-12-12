function average(numbers) {
    //average is computed as sum / count where count excludes the NaN
    let sum = 0;
    let count = numbers.length;
    let max_value = Math.max(...numbers);
    let min_value = Math.min(...numbers);
    let variation = max_value - min_value; // variation is computed as maximum number - minimum number
    if (variation > 0.95 * max_value) {
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