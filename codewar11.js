//return number only from array
const l=[1, 5 ,"hee" , "go", 5];
let arr= [];
  let i=0;
  for( let x of l){
    if((typeof(x) !=='string'))
      //if(typeof(l[x]) !=="undefined")
      arr.push(x);
  }
  return arr;
    // another simple solution is

return l.filter(Number.isInteger);
        
  


