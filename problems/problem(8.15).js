function validParentheses(str) {
  // Ваш код здесь
  let p = 0;
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      p = 1;
    } else if (str[i] === ")") {
      if (p === 1) {
        k += 1;
        p = 0;
      } else {
        return false;
      }
    }
  }

  if (p === 0 && k > 0) {
    return true;
  }
}

console.log(validParentheses("(Привет)")); // true
console.log(validParentheses("(Привет)оп-па!)")); // false
console.log(validParentheses("(ку))ку(")); // false
console.log(validParentheses("()()()()(("));
