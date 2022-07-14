
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a-b, 4);
}

console.log(positiveSum([-2, 4,5,-1]))