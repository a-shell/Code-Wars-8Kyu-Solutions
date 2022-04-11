//A function that tells you if your grade was above the average or not
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // Calculate average by:
    //adding together classPoints and yourPoints
    const sum = classPoints.reduce((a,b) => a + b, 0) + yourPoints;
    //dividing the sum by the number of elements in the array
    const average = sum / (classPoints.length + 1);
    //comparing the sum total to yourPoints and return True if yourPoints is greater than the average
    if (yourPoints > average){
      return true;
    } else {
      return false;
    };
  }

//Alt solutions
function betterThanAverage2(classPoints, yourPoints){
    return yourPoints > classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
}

function betterThanAverage3(classPoints, yourPoints) {
    let classAvg = 0;
    for (let i = 0; i < classPoints.length; i++){
        classAvg += classPoints[i];
    }
    classAvg = classAvg/classPoints.length;
    return yourPoints > classAvg;
}