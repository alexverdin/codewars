function isIsogram(str){
  str = str.toLowerCase();
  if(str === ''){
    return true;
  }else{
    for(let i=0; i<(str.length)-1; i++){ // The "-1" isn't necessary, but is a bit more efficient because we save one last cycle
      for(let j=i+1; j<str.length; j++){
        if(str[i] === str[j]){
          return false
        };
      }
    }
    return true;
  }
}

console.log(isIsogram('isIsogram'));