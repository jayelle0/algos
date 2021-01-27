// TITLE: Frequency Counters 

// example problem Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// naive example 
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

// refactored - better to have more for loops than to have nested loops

function same(arr1, arr2){
    // first as long as the array lengths are not equal the function will be false 
    if(arr1.length !== arr2.length){
        return false;
    }
    // next we're turning the arrays to an object 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // the number will be the key; the frequency of times the number appears in the array will be the value; || if either a or b is true. So if a is true you don't need to check b at all.
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    for(let key in frequencyCounter1){
        // if key^2 does not match the key in the 2nd array; return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // if value does not match in array1 and array2 ; return false 
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// TITLE: Anagram - Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  

//   TITLE: Multiple Pointers - Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
// 

// Naive solution 
    // Time Complexity - O(N^2)
    // Space Complexity - O(1)


function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored 
    // Time Complexity - O(N)
    // Space Complexity - O(1)

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// TITLE: Sliding Window 


