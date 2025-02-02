module.exports = function check(str, bracketsConfig) {
  const n = str.length;

  let el0 = bracketsConfig.map((item) => item[0]);
  let el1 = bracketsConfig.map((item) => item[1]);

  if (n % 2 !== 0) return false;

  const stack = [];

  for (let i = 0; i < n; i++) {
    if (
      el1.indexOf(str[i]) === el0.indexOf(stack[stack.length - 1]) &&
      el1.indexOf(str[i]) !== -1
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};
