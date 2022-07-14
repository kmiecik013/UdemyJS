  function repeatStr (n, s) {
    let arr = []
    
    while (arr.length < n) {
    arr.push(s)
    }
    
    return arr.join("")

  }

  console.log(repeatStr(5,"hello"));