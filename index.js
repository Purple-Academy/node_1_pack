// Greeting and version log
console.log("Greetings from Reverse Polish Notation Calculator!");
console.log("Version 1.0.0");

function evaluateRPN(expression) {
  const stack = [];

  const tokens = expression.split(" ");

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error(`Unsupported operator: ${token}`);
      }
    }
  });

  return stack.pop();
}

module.exports = evaluateRPN;
