function truthCheck(collection, pre) {
  // Is everyone being true?
  var i = 0;
  for (i ; i<collection.length; i++){
    if(collection[i].hasOwnProperty(pre) && collection[i][pre] ){
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");