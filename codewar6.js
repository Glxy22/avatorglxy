function correct(string)
{
	// your code here
  const str = string.split('');
		 console.log(str);
   for ( var i = 0; i < str.length; i++){
     	if (str[i] == "5")
     		str[i]= "S";
     	if (str[i] == "0")
     		str[i]= "O";
     	if (str[i] =="1")
     		str[i]="I";
   }
   return (str.join(''));

  }
  
  // other way with regex
  
  function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}
