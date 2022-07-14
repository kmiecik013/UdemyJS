function lovefunc(flower1, flower2){
  return (flower1%2 === 0 && flower2%2 !== 0) || (flower2%2 === 0 && flower1%2 !== 0) 
}

console.log("test", lovefunc(2,1))

function lovefunc2(flower1, flower2){
  return (flower1 + flower2) % 2 !== 0
}

console.log("test2", lovefunc2(5,5))