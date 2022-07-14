var countSheep = function (num){
  let arr = []
  
  while (arr.length < num) {
      arr.push(arr.length +1 +" sheep...")
    }
    
   return arr.join("")

  }

  console.log(countSheep(5))