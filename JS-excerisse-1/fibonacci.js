  function fibonacciGen(n) {
    output = [];


    if (n === 1) {
      return output = [0]
    }

    else if (n === 2) {
      return output = [0,1]
    }
    
    else {
      output =[0,1]
    
      
    for (let i = 2; i < n; i++ ) {
      
      output.push(output[output.length -1] + output[output.length - 2]);
  
    
    }

    return output;
  }
  }

  console.log(fibonacciGen(10));