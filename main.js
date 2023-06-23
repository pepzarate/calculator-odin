let num1, num2, operator

const operate = (num1, num2, operator) => {
    let result
    switch (operator) {
        case "+":
            result = add(num1,num2)
            break;
        case "-":
            result = subtract(num1,num2)
            break;
        case "*":
            result = multiply(num1,num2)
            break;
        case "/":
            result = divide(num1,num2)
            break;
        default:
            result = 0            
    }
    return result
}

const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    if(num1 === 0 && num2 === 0) return "Resultado Indefinido"
    let result = num1 / num2
    numberRegexp = new RegExp('\\d\\.(\\d){2,}')
    if (numberRegexp.test(result)) {
        return Number(result.toFixed(2))
    } else {
        return Number(result.toFixed(2)) === 0 ? 0 : result
    }
}