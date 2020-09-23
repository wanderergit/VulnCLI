const inquirer = require("../inquirer");
const clear = require("clear");
const mysql = require("mysql");
const database = require("../database");

module.exports = {
  export: async () => {
    const answer = await inquirer.sqlBookIdInput();
    const op = answer.sqlonereply;

    const dbanswer = await database.sqlOne(op);
    return 1;
  },
};
