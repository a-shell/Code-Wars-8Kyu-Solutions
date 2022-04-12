//A function to remove second other element from an array
function removeEveryOther(arr){
    //your code here
    return arr.filter((x, i) => i % 2 === 0);
}

//Alt solutions
function removeEveryOther2(arr){
    //your code here
    //Create a new array to store the affected values
    let newArr = [];
    //Create a For loop
    for (let i = 0; i < arr.length; i++){
    //If the index is divisible by 2 (in this example, the "keep" elements), push that element to the new array
      if (i % 2 == 0){
        newArr.push(arr[i]);
      };
    };
    //Return the new array made up of the "keep" elements"
    return newArr;
    }

    removeEveryOther2(["Keep", "Remove", "Keep", "Remove", "Keep"]) // ["Keep","Keep","Keep"]