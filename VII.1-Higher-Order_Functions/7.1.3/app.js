const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return checkB
    } else {
        return 'inconsistent result'
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 8));
  