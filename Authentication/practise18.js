// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



function abbrevName(name){

  let twoName = name.split(" ")

  return twoName.map(name => name[0].toUpperCase()).join(".")



}

console.log(abbrevName("mike kmiecik"))