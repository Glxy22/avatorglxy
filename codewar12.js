//return the min word length from string
function findShort(s){
  let a = s.split(" ");
  
  console.log(a);
  //Array.from(s);
  let k = a[0];
  for(let i = 0; i < a.length; i++){
    let b = i+1;
    if(a[i].length < k.length )
      k = a[i];
  }
  return k.length;
  //console.log(s);
}
const s= "There is big trouble in the city, try to be safe."
findShort(s);
