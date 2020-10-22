
/// DELETES OBJECT WITH ID IN ARRAY AND RETURNS NEW ARRAY ///
export function removeObjectWithIdFromArray(arr, value) {
  return arr.filter(function (obj) {
    return obj.id !== value
  })
}


/// CHECK IF ARRAY HAS OBJECT WITH SPECIFIC ID, RETURNS BOOLEAN ///
export function includesInArray(arr, value) {
  return arr.some(obj => obj.id === value)
}


export function removeFirstObjectFoundWithID(arr, value) {
  return arr.find(function (obj) {
    return obj.id !== value
  })
}

export function filterOutByIndex(arr, value) {
  return arr.filter((val, i) => i !== value)
}

export function filterOutByValue(arr, value) {
  return arr.filter(obj => value !== obj.id)
}

export function findIndexInArray(arr, value) {
  return arr.findIndex(obj => value === obj.id)
}

