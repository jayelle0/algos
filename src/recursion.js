function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }

//  sumRange(4) 
//  return 4 + sumRange(3) 
            // return 3 + sumRange(2)
                        // return 2 + sumRange (1)
                                    //   return 1 

//  simplified = 4 + 3 + 2 + 1 = 10 

// TITLE: Factorial recursion 
function factorial(num){
    if(num === 1) return 1; 
    return num * sumRange(num-1);
 }

//  TITLE: Helper method recursion 

// collect all of the odd values in an array
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}

// TITLE: Pure recursion 
// same problem as above 
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}