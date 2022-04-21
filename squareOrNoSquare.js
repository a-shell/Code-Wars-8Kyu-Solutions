//A function to determine whether a given element has an integer square root (and if it does, copy that result to a new array) or not (and copy the squared result to a new array)

function squareOrSquareRoot(array) {
    //Create a new array where we'll write our solutions to
    let newArray = [];
    //Initialize a for loop, this will run through each element in the array and determine if it has an integer square root
    for (let i = 0; i < array.length; i++){
      //If the square root of the element is an integer, square root it and then push it to the new array
      if ( Number.isInteger( Math.sqrt( array[i] ) ) ){
        newArray.push( Math.sqrt( array[i] ) );
        //If it is not an integer, square it (multiply it by itself) and push it to the new array
      } else {
        newArray.push(array[i] * array[i]);
      };
    }
    //Return the new array
    return newArray;  
  }

  //Alt solutions

  function squareOrSquareRootTwo(array) {
      let newArray = [];
      //Create a new array where we'll write our solutions to
      for (let i = 0; i < array.length; i++){
          //Create a number variable to avoid using "array[i]"
          let number = array[i];
          //If the result of square rooting number is equal to the 
          //result of square rooting number **AND** rounding it down (eg is 12.1 == 12?), push the sqrt to new array
          if (Math.sqrt(number) == Math.floor(Math.sqrt(number))){
              newArray.push(Math.sqrt(number));
          //Otherwise push number squared to the new array
          } else {
              newArray.push(number * number);
          }
      }
      //Return the new array
      return newArray;
  }