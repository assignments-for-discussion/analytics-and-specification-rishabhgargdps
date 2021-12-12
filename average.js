function average(numbers) {
    //average is computed as sum / count where count excludes the NaN values
    let res = 0;
    let count = numbers.length;

    numbers.map((val, i) => {
        if (isNaN(val)) {
            count -= 1
        } else {
            res += val;
        }
    })

    return res / count
}

module.exports = { average };