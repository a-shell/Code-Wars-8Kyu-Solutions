//A function that swaps the first and last names.
function nameShuffler(str){
    //Shuffle It
    //Convert input string to array
    let fullName = str.split(" ");
    //Set a first name variable equal to the first element in the array
    let firstName = fullName[0];
    //Set a last name variable equal to the second element
    let lastName = fullName[fullName.length-1];
    //return a string with the names reversed
    return `${lastName} ${firstName}`;
  }

  //Alt solutions
  function nameShuffler2(str){
      return str.split(" ").reverse().join(" ");
  }

  const nameShuffler3 = str => str.split(" ").reverse().join(" ");