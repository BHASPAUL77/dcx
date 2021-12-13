var inquirer = require('inquirer');

module.exports.generateFibonacci = async (question) => {
    const result = await inquirer.prompt(question);
    if (result.range <= 0)
        return 'Please enter the value which is greater than 0.';
    if (!parseInt(result.range))
        return 'The value cannot be a string or charecter.';
    let fibonacciSeries = [];
    for (let i = 0; i < result.range; i++) {
        fibonacciSeries.push(getFibonacciNumber(i));
    }
    return fibonacciSeries;
}

const getFibonacciNumber = (number) => {
    if (number > 1)
        return getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
    return number;
}

