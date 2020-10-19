const inquirer = require("./inquirer");
const clear = require("clear");
const database = require("./database");
const sql_injection = require("./sql_injection");
const chalk = require("chalk");
const figlet = require("figlet");

module.exports = {
  displayMenu: async () => {
    const answers = await inquirer.mainMenuOptions();
    //checking the options
    const option = answers.mainselect;
    if (option === "1") {
      var flg = 1;
      while (flg == 1) {
        clear();
        console.log(
          chalk.blueBright(
            figlet.textSync("VulnCLI", { horizontalLayout: "full" })
          )
        );
        var sth = await database.createDatabase();
        if (sth == 1) {
          flg = 0;
          return 1;
          break;
        } else {
          setTimeout("database.createDatabase", 2000);
        }
      }
      console.log("Done");
      return 1;
    } else if (option === "2") {
      var flg = 1;
      while (flg == 1) {
        clear();
        console.log(
          chalk.blueBright(
            figlet.textSync("VulnCLI", { horizontalLayout: "full" })
          )
        );
        var sth = await database.populateDatabase();
        if (sth == 1) {
          flg = 0;
          return 1;
          break;
        } else {
          setTimeout("database.createDatabase", 2000);
        }
      }
      console.log("Done");
      return 1;
    } else if (option === "3") {
      var flg = 1;
      while (flg == 1) {
        clear();
        console.log(
          chalk.blueBright(
            figlet.textSync("VulnCLI", { horizontalLayout: "full" })
          )
        );
        var sth = await sql_injection.showMenu();
        if (sth == 0) {
          flg = 0;
          break;
        } else {
          continue;
        }
      }
      return 1;
    } else if (option === "5") {
      return 0;
    }
  },
};
