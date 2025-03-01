/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {
  let sum = 0;
  while (min <= max) {
    sum += min;
    min++;
  }
  return sum;
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  let arr = [];
  for (let i = 0; min <= max; i++) {
    if (max % 2 === 0) {
      max--;
    }
    arr.push(max);
    max -= 2;
  }
  return arr;
}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min += 2;
  }
  return arr;
}

/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsWhileLoop(array, target) {
  let result = false;
  let i = 0;
  while (i < array.length) {
    if (array[i] === target) {
      result = true;
    }
    i++;
  }
  return result;
}

/**
 * containsForLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
// function containsForLoop(array, target) {
//   let result = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       result = true;
//     }
//   }
//   return result;
// }
// // using for...of loop
function containsForLoop(array, target) {
  let result = false;
  for (let i of array) {
    if (i === target) {
      result = true;
    }
  }
  return result;
}

/**
 * targetCount()
 * ---------------------
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */
// function targetCount(array, target) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       result++;
//     }
//   }
//   return result;
// }
function targetCount(array, target) {
  let result = 0;
  for (let i of array) {
    if (i === target) {
      result++;
    }
  }
  return result;
}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
// function firstIndexFound(array, target) {
//   let result = -1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       result = i;
//       break;
//     } 
//   }
//   return result;
// }
function firstIndexFound(array, target) {
  let result = -1;
  for (let i of array) {
    if (i === target) {
      result = array.indexOf(i);
      break;
    } 
  }
  return result;
}

/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function lastIndexFound(array, target) {
  let result = -1;
  for (let i = array.length-1; i >= 0; i--) {
    if (array[i] === target) {
      result = i;
      break;
    } 
  }
  return result;
}

/**
 * timesIndex()
 * ---------------------
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements
 * @returns {number[]}
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */
// function timesIndex(array) {
//   for (let i = 0; i < array.length; i++) {
//     // update array[i] multiplied with current index
//     array[i] *= i;
//   }
//   return array;
// }
// // used for...in loop to access the index of the array and update the value of that index.
function timesIndex(array) {
  for (let i in array) {
    array[i] *= i;
  }
  return array;
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
// function cumulativeSum(array) {
//   for (let i = 1; i < array.length; i++) {
//     //update array[i] the sum with the previous index
//     array[i] += array[i-1]; 
//   }
//   return array;
// }
// // used for...in loop to access the index of the array
function cumulativeSum(array) {
  for (let i in array) {
    // the first index will have no change
    if (i > 0) {
      // from second index will update with the sum of current and previous index value
      // and "array[i--]" needs to be placed before "array[i]", not the other way around
      // that's because it needs to bring the previous index value first, before calling the current one.
      array[i] = array[i--] + array[i];
    }
  }
  return array;
}

// Do not change anything below this line.
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
