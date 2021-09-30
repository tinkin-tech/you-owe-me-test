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

const removeDuplicatedElementFromArray = (array) => {
  return [...new Set(array)]
}

const getValuesFromObject = (object) => {
  return Object.values(object)
}