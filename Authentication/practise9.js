// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
 newArray = [...s]

  for (i =0; i< newArray.length; i++) {
    if (newArray[i] === '!'){
   newArray[i] = ''
    }
  }
    return newArray.join("")
  }

console.log(removeExclamationMarks("hello! Watsup"))
