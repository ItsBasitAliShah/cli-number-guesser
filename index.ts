#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a Number from 1-6: ",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("CONGRATULATIONS!! You guessed the Right Number :)");
} else {
  console.log("You Guessed the Wrong Number :(");
}
