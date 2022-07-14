function paperwork(n, m) {
  return n < 0 || m <0 ? 0 : n * m;
  
  }

console.log("test1", paperwork(2,5))
console.log("test2", paperwork(0,4))