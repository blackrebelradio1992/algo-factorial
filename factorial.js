function factorial(num) {
  let result = num;
  if (num === 1 || num === 0) {
    return 1
  } 
  while(num > 1){
    num--
    result = result * num
  }
  return result;
}

// console.log(factorial(4))

module.exports = factorial;
