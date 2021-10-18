const sumTwoNumbers = (numA, numB) => {
    return typeof numA === 'number' && typeof numB === 'number' ? numA + numB : 'Send only numbers';
}

const getCommonElements = (arrayA, arrayB) => {
    return arrayA.filter(
        (element) => arrayB.find((elementB) => elementB === element)
    )
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min))
}

const showMessageName = (name = 'Tinkin') => {
    return `Hello ${name}, how are you?`
}

const convertStringToArray = (string) => {
    return string.split(' ')
}


const convertFahrenheitToCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32)
}


const getValuesFromObject = (object) => {
    return Object.values(object)
}


const divideNumbers = (dividend, divisor) => {
    return dividend / divisor
}


const redondearTwoDecimals = (value, numberOfDigits) => {
    return Number(value).toLocaleString('de-DE', {
        maximumSignificantDigits: numberOfDigits,
        minimumSignificantDigits: numberOfDigits,
    })
}


module.exports = {
    sumTwoNumbers,
    showMessageName,
}