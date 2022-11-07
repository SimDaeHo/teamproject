function calculateAvg(price1, price2 , price3) {
    const sum = price1 + price2 + price3
    const avg = sum / 3
    return avg
}

const sum1 = 10000
const sum2 = 20000
const sum3 = 30000

const avg = calculateAvg(sum1 , sum2, sum3);
console.log(`평균값은 ${avg}이다.`)