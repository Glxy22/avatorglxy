//requires twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//Sort and Star

function twoSort(s) {
  s.sort();
  var arr = [];
  let x = 0;
  for(var i = 0; i < 1; i++){
    for (var j = 0; j < s[i].length; j++){
      arr += s[i][j] + "***";
          
        console.log(arr);
}  
}
     return arr.substr(0,arr.length-3);
}
