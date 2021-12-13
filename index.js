var fibonacci = require('./src/handler/app');

const question = {
    type: 'input',
    name: 'range',
    message: 'Enter the range:'
};

fibonacci.generateFibonacci(question).then(function (x) {
    if (Array.isArray(x) && x.length > 0) {
        for (let element of x.values()) {
            console.log(element);
        }
    }
    else {
        console.log(x)
    }
});

