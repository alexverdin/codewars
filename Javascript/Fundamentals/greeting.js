/**
 * 8 Kyu
 * Create a function that gives a personalized greeting.
 * This function takes two parameters: name and owner.
 * Use conditionals to return the proper message:
 *   case                |       return
 * name equals owner	 |   'Hello boss'
 * otherwise	         |   'Hello guest'
 */

// My version
const greet = (name, owner) => {
    if(name === owner){
        return 'Hello boss'
    }
    return 'Hello guest'
}

// Optimized version
const newGreet = (name, owner) => {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}