const rs = require('readline-sync')

let operations = ['add', 'sub','mul', 'div']
let question = rs.keyInSelect(operations, 'Would kindly like to Math')

// console.log('question', question);

const calculator = (operation) => {
    let firstNum = Number(rs.question(' What number would you like to start? '));
    let secondNum = Number(rs.question(' What is your final number? '))

switch (question) {
    case 0:
        return firstNum + secondNum;
        break;
    case 1:
        return firstNum - secondNum;
        break;
    case 2:
        return (firstNum * secondNum) * 5;
        break;
    case 3:
        return firstNum / secondNum;
        break
}
}

console.log(calculator(question))
