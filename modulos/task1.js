export function costCalculator(number) {
    number = Number(number);
    let result = (number + 3) + ((number + 3) * 0.01);
    return result;
}

console.log(costCalculator(124));