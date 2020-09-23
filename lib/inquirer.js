const chalk = require("chalk");
const inquirer = require("inquirer");

module.exports = {
  mainMenuOptions: () => {
    const questions = [
      {
        type: "input",
        name: "mainselect",
        message: chalk.red(
          "\n\nSelect the option of your choice:\n1. Create Database\n2. Populate Database\n3. SQL Injection\n4. File Attack\n5. Quit.\n"
        ),
        default: null,
      },
    ];
    return inquirer.prompt(questions);
  },
  sqlMenuOptions: () => {
    const ques = [
      {
        type: "input",
        name: "mainselect",
        message: chalk.grey(
          "\n\nSelect the option of your choice:\n1. SQL Injection Level 1\n2. SQL Injection Level 2\n3. SQL Injection Level 3\n4. Quit\n"
        ),
        default: null,
      },
    ];
    return inquirer.prompt(ques);
  },
};
