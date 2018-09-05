var isPalindrome = function (str) {
    if (!str) return false;
    
    var _str = str.replace(/ /g,'').toLowerCase();
    
	return _str.split('').reverse().join('') === _str;
}
 

console.log(isPalindrome("Matam"));
console.log(isPalindrome("tacocat"));