//Given an array of integers, return a new array with each value doubled.

function maps(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
      newArray.push(array[i] * 2);
    };
    return newArray;
  };

//Alt solutions
function mapsTwo(x){
    return x.map(n => n * 2);
  }

  mapsThree = x => x.map(e => e * 2);