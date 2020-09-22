const inquirer = require("./inquirer");
const database = require("./database");
const sql_injection = require("./sql_injection");

var flg = 0;
module.exports = {
  displayMenu: async () => {
    const answers = await inquirer.mainMenuOptions();
    //checking the options
    const option = answers.mainselect;
    if (option === "1") {
      const sth = await database.createDatabase();
      console.log("Done");
      return sth;
    } else if (option === "2") {
      const sth = await database.populateDatabase();
      console.log(sth);
      return sth;
    } else if (option === "3") {
      var main = await sql_injection.showMenu();
      return 1;
    } else if (option === "5") {
      return 0;
    }
  },
};
