//palindrome checker


function palindrome(str) {
  str = str.replace(/[^0-9a-zA-Z]/gi, '');
  str = str.toLowerCase();
var Case = str.split("");
var isPal = true;
  
    
  for (var x=0; x < str.length-x; x++) {
      if ( Case[x] !== Case[(str.length-1-x)]){
         isPal = false;
      }
    }
   return isPal;
  }



palindrome("eye");