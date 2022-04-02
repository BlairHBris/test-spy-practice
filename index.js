export function map(array, transform){
  const newArray = []

  for (let i = 0; i < array.length; i++){
    const oldElement = array[i]
    const newElement = transform(oldElement)
    newArray.push(newElement)
  }

  return newArray
}

export function filter(array, predicate){
  const newArray = []

  for (let i = 0; i < array.length; i++){
    const element = array[i]
    if (predicate(element)){
      const newElement = JSON.parse(JSON.stringify(element))
      newArray.push(newElement)
    }
  }

  return newArray
}

export function reduce(array, reducer, initial){
  let accumulation = initial

  for (let i = 0; i < array.length; i++){
    const element = array[i]
    accumulation = reducer(accumulation, element)
  }

  return accumulation
}

// Assert that `console.log` was called with the provided string:
export function log(message){
  console.log(`LOG: ${message}`)
}

// Assert that this function works:
export function someFunction(someString, somePromise){
  return somePromise.then(someValue => {
    return `${someString}: ${someValue}`
  })
}
