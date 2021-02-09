
// BIG O 
// Linear Search - O(n)
// Binary Search - O(log n)
// Naive String Search - O(nm)
// KMP - O(n + m) time, O(m) space

// Linear Search Pseudocode
// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1


// Binary Search Pseudocode
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)


// KMP 

function kmpSearch(long, short) {
    let table = matchTable(short);
    let shortIdx = 0;
    let longIdx = 0;
    let count = 0;
    while (longIdx < long.length - short.length + shortIdx + 1) {
      if (short[shortIdx] !== long[longIdx]) {
        // we found a mismatch :(
        // if we just started searching the short, move the long pointer
        // otherwise, move the short pointer to the end of the next potential prefix
        // that will lead to a match
        if (shortIdx === 0) longIdx += 1;
        else shortIdx = table[shortIdx - 1];
      } else {
        // we found a match! shift both pointers
        shortIdx += 1;
        longIdx += 1;
        // then check to see if we've found the substring in the large string
        if (shortIdx === short.length) {
          // we found a substring! increment the count
          // then move the short pointer to the end of the next potential prefix
          count++;
          shortIdx = table[shortIdx - 1];
        }
      }
    }
    return count;
  }