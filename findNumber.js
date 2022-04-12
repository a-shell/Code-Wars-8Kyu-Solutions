//A function to find the first non-consecutive number in an array
function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; i++){
      if(arr[i + 1] - arr[i] !== 1){
        return arr[i + 1];
      }; 
    };
    return null; 
  }
  

//Alt solutions
function firstNonConsecutive2 (arr) {
  for (let i = 1; i < arr.length; i++){
    if (arr[i -1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}