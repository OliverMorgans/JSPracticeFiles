//Caesar Cipher

function rot13(str) { // LBH QVQ VG!
  var uniCode = [];
  for (var i = 0; i < str.length; i++ ){
    if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 78){
    uniCode.push(str.charCodeAt(i) -13);}
    else if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) >= 65){
      uniCode.push(str.charCodeAt(i) + 13);}
    else 
      uniCode.push(str.charCodeAt(i));
  }
    
  for (var j = 0; j <uniCode.length; j++){
    var newVar = String.fromCharCode(uniCode[j]);
    uniCode[j] = newVar;
    
  }
  
  return uniCode.join("");
}
// Change the inputs below to test
rot13("SERR CVMMN!");