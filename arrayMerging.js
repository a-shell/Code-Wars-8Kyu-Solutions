//This is a function to merge two sorted arrays. If there are duplicates, discard the duplicate. If one array is empty, return the other array.

//This function will determine if the number being passed to newArray would be a duplicate
function dupeChecker(newArray, element){
    //Determine if newArray has any elements, if not there can be no duplicates and we can push.
    if (Array.isArray(newArray) && newArray.length == 0){
      newArray.push(element);
    //Determine if the last element in newArray is different from the element being checked, if it is different, pass it to newArray
    } else if (newArray[newArray.length - 1] !== element){
      newArray.push(element);
    //If the array has elements, and the last element is not different from this element, do not push.
    } else {
    };
    return newArray;
  }
//This function will merge the two arrays into one
  function mergeArrays(arr1, arr2) {
    //Merge the two arrays into one sorted array
    //Create the new array
    let newArray = [];
    //Declare the starting points of the while loop that will be used to iterate through each array as the elements are added to newArray
    let i = 0;
    let j = 0;
    
    //Determine if either is in descending order and if they are, reverse them.
    if (arr1[i] > arr1[arr1.length - 1]){
      arr1.reverse();
    };
    if (arr2[j] > arr2[arr2.length - 1]){
      arr2.reverse();
    };
    
    //Determine if either array is empty and if one is empty, return only the existing aary
    if (Array.isArray(arr1) && arr1.length == 0){
      return arr2
    } else if (Array.isArray(arr2) && arr2.length == 0){
      return arr1
    };
    
    //So long as both counters have not reached the end of each array, push each element into newArray. This will not account for the length of the arrays and if one finishes, the loop will finish without adding all the elements to newArray
    while (i < arr1.length && j < arr2.length){
      //If arr1's element is a smaller number, add that to newArray and increment the counter for arr1
      if (arr1[i] < arr2[j]){
        newArray = dupeChecker(newArray, arr1[i]);
        i++;
      //If arr2's element is a smaller number, add that to newArray and increment the counter for arr2
      } else if (arr1[i] > arr2[j]){
        newArray = dupeChecker(newArray, arr2[j]);
        j++;
      //If the numbers are equal, push both of them to newArray and increment the counter for both
      } else {
        newArray = dupeChecker(newArray, arr1[i]);
        newArray = dupeChecker(newArray, arr2[j]);
        i++;
        j++;
      };
      //If arr1 has gotten to the end and arr2 has not, push arr2 elements into newArray until all arr2 elements have been added
      if (i == arr1.length && j < arr2.length){
          for (let l = j; l < arr2.length; l++){
            newArray = dupeChecker(newArray, arr2[l]);
            //newArray.push(arr2[l]);
        };
        //If arr2 has gotten to the end and arr1 has not, push arr1 elements into newArray until all arr1 elements have been added
      } else if (i < arr1.length && j == arr2.length){
          for (let k = i; k < arr1.length; k++){
            newArray = dupeChecker(newArray, arr1[k]);
            //newArray.push(arr1[k]);
        };
      }; 
    };
   return newArray;
  }