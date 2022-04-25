//This is a function that will take an integer and return a reversed array composed of its individual numbers.

function digitize(n) {
    //code here
    //Create the array to write our individual integers into
    let revArray = [];
    //Convert to string and then to array
    let str = n.toString();
    let firstArray = str.split("");
    //Reverse array
    //Starting at the last element, ending at the first element, incrementing by -1 (counting backwards), and writing to revArray
    for (let i = firstArray.length - 1; i >= 0; i--){
      revArray.push(firstArray[i]);
    };
    //Return reversed array by mapping the strings to finalArray as integers
    let finalArray = revArray.map(str => {
      return Number(str);
    });
    return finalArray;
  }
  
  //Alt solutions
  function digitize(n) {
    //code here
    let numArr = [];
    //While our given number is greater than 0, the following will occur until our number is 0.
    while(n > 0){
    //This will write the the last digit to numArr (eg. if n = 359, numArr = [9])
      numArr.push(n % 10);
    //This will divide n by 10, round it down, and set n equal to that (eg. 359/10 = 35.9, rounded down to 35, n = 35.) Repeat the these steps with n = 35 until n = 0.
      n = Math.floor(n/10);
    }
    //Returns numArr = [9, 5, 3]
    return numArr;
  }