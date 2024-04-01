import inquirer from "inquirer";

const answers: {
  numberOne: number;
  numberTwo: number;
  operater: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Kindly enter your first no: ",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Kindly enter your second no: ",
  },
  {
    type: "list",
    name: "operater",
    choices: ["*", "+", "-", "/"],
    message: "Select your operater: ",
  },
]);

const { numberOne, numberTwo, operater } = answers;
if (numberOne && numberTwo && operater) {
  let result: number = 0;
  if (operater === "+") {
    result = numberOne + numberTwo;
  } else if (operater === "-") {
    result = numberOne - numberTwo;
  }
  if (operater === "/") {
    result = numberOne / numberTwo;
  }
  if (operater === "*") {
    result = numberOne * numberTwo;
  }
  console.log("Your result is :", result)
} else {
  console.log("Kindly enter valid input");
}
