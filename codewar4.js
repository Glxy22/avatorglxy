function positiveSum(arr) {
  
  let sum = 0 ;
  for(var i=0; i< arr.length; i++){
    if(arr[i] > 0){
        console.log(arr[i]);    
      sum += arr[i];
     
  }
}
     return sum;
}
 const array = [1, 5 , -2, 8, 4];
 console.log(positiveSum(array));
