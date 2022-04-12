//A function to remove every other element from an array
function removeEveryOther(arr){
    //your code here
    return arr.filter((x, i) => i % 2 === 0);
}

//Alt solutions
function removeEveryOther2(arr){
    //your code here
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (i % 2 == 0){
        newArr.push(arr[i]);
      };
    };
    return newArr;
    }