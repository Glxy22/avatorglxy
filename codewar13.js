//Get the Middle Character

function getMiddle(s)
{
  let x= 0;
  //Code goes here!
  if(s.length % 2 !==0){
     x = (s.length - 1)/2;
  return s.slice(x,x+1)
  }
  else if(s.length % 2 === 0){
     x = s.length/2;
    return s.slice(x-1,x+1)
    }
}
