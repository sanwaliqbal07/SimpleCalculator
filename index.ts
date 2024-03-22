#! /usr/bin/env node

import inquirer from "inquirer"

const asnwer =await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "fisrtNumber" },
    { message: "Enter the second number", type: "number", name: "secondNumber" },
    { 
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
  ]);
  if (asnwer.operator === "Addition") {
    console.log(asnwer.fisrtNumber + asnwer.secondNumber);
  } else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.fisrtNumber - asnwer.secondNumber);
  } else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fisrtNumber * asnwer.secondNumber);
  } else if (asnwer.operator === "Division") {
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
  } else {
    console.log("Please select  Operator")
}

console.log("The End");