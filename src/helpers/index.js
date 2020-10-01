
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

/* function removeID(arr, value) {
    let array = arr
    let firstMatch = array.findIndex(obj => obj.id === value)
    array.splice(firstMatch, 1)
    console.log(array)
    return array
} */
