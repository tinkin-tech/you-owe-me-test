const getCommonElements = (arrayA, arrayB) => {
    return arrayA.filter(
        (element) => arrayB.find((elementB) => elementB === element)
    )
}

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min))
}

const showMessageName = (name) => {
    return `Hello ${name}, how are you?`
}

const removeDuplicatedElementFromArray = (array) => {
  return [...new Set(array)]
}

const getValuesFromObject = (object) => {
  return Object.values(object)
}
