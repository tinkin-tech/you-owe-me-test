const sumTwoNumbers = (numA, numB) => {
    return numA + numB
}

const getCommonElements = (arrayA, arrayB) => {
    return arrayA.filter(
        (element) => arrayB.find((elementB) => elementB === element)
    )
}

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min))
}


const showMessage = (message) => {
    alert('Hello World !!!!')
}


const convertStringToArray = (string) => {
  return string.split(' ')
}


const convertFahrenheitToCelsius = (fahrenheit) => {
  return (5/9) * (fahrenheit - 32)
}


const getValuesFromObject = (object) => {
  return Object.values(object)
}