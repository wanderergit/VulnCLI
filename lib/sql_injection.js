const clear = require("clear");

var fl = 0;
module.exports = {
  showMenu: async () => {
    while (fl == 0) {
      clear();
      console.log(
        chalk.blueBright(
          figlet.textSync("VulnCLI", { horizontalLayout: "full" })
        )
      );
      const answers = await inquirer.sqlMenuOptions();
      const option = answers.mainselect;
      if (option === "1") {
        const sth = await sql_injection.sqllevelone();
        console.log("Done");
        return sth;
      } else if (option === "2") {
        const sth = await database.sqlleveltwo();
        console.log(sth);
        return sth;
      } else if (option === "3") {
        const sth = await sql_injection.sqllevelthree();
        console.log(sth);
        return sth;
      } else if (option === "4") {
        return 0;
      }
    }
  },
};
