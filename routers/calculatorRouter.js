import express from "express";

const calc = express.Router();
const OPS = {
  add: "plus",
  subtract: "minus",
  multiply: "multiplied by",
  divide: "divided by",
};

calc.get("/:num1/:operator/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const operator = req.params.operator;
  if (isNaN(num1) || isNaN(num2) || Object.keys(OPS).indexOf(operator) === -1) {
    res.sendStatus(404);
  } else {
    res.json({
      operation: `${num1} ${OPS[operator]} ${num2}`,
      result: getCalculation(num1, num2, operator),
    });
  }
});

function getCalculation(num1, num2, operator) {
  switch (operator) {
    case "add":
      return num1 + num2;
      break;
    case "minus":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    case "divide":
      return num1 / num2;
  }
}

export { calc };
