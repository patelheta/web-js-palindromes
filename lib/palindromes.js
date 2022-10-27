const isPalindrome = function(s) {
  s = s.replaceAll(" ", "");
  let stringReverse = s.split("").reverse().join("");
  return s === stringReverse;
};

module.exports = isPalindrome;


