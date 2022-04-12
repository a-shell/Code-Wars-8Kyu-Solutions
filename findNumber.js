//A function to find the first non-consecutive number in an array
function firstNonConsecutive (arr) {
    //Create a for loop
    for (let i = 0; i < arr.length - 1; i++){
    //If the index following the current index minus the current index is not equal to one, return the following index
      if(arr[i + 1] - arr[i] !== 1){
        return arr[i + 1];
      }; 
    };
    //After iterating through the array, if all numbers are consecutive return null
    return null; 
  }
  

//Alt solutions
function firstNonConsecutive2 (arr) {
  for (let i = 1; i < arr.length; i++){
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

firstNonConsecutive([1,2,3,4,6,7,8]) //6
firstNonConsecutive([1,2,3,4,5,6,7]) //null