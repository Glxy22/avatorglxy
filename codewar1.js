function rentalCarCost(d) {
  // Your solution here
  let x = 40;
  for (var i= 0; i < d; i++ ){
    if( d >= 3 && d < 7){
      return (x * d)-20;
      }
    if(d >= 7){
      return (x * d)- 50;
    }
    else{
      return d * x;
    }
  }
}
