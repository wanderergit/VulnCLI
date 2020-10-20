#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const database = require("./lib/database");
const menu = require("./lib/menu");

clear();

console.log(
  chalk.blueBright(figlet.textSync("VulnCLI", { horizontalLayout: "full" }))
);
console.log("Developed as part of NASSCOM Project\n");
var flag = 1;
const run = async () => {
  while (flag == 1) {
    clear();
    console.log(
      chalk.blueBright(figlet.textSync("VulnCLI", { horizontalLayout: "full" }))
    );
    var main = await menu.displayMenu();
    if (main == 0) {
      flag = 0;
      break;
    } else {
      continue;
    }
  }
  try {
    console.log("\n");
  } catch (err) {
    if (err) {
      switch (err.status) {
        case 401:
          console.log(
            chalk.red(
              "Couldn't log you in. Please provide correct credentials/token."
            )
          );
          break;
        case 422:
          console.log(
            chalk.red(
              "There is already a remote repository or token with the same name"
            )
          );
          break;
        default:
          console.log(chalk.red(err));
      }
    }
  } finally {
    console.log(chalk.greenBright("Thank you for using VulnCLI.\n\n"));
    process.exit();
  }
};

run();
