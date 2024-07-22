/**
 * 7 Kyu
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 
Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

 */

// My Version
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

// Optimized Version 😱
/**
 * Explanation:
 * "Set()" is an object that allow us to store UNIQUE VALUES only
 * when you pass the string to the Set() constructor, it stores each character ONLY ONCE.
 * So, if you compare the size of the original string and the "setted" string and they're the same, the string was an Isogram
 */
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}