const inquirer = require("./inquirer");

module.exports = {
  showMenu: async () => {
    const asw = await inquirer.sqlMenuOptions();
    const op = asw.mainselect;
    if (op === "1") {
      const ret = await sqllevelone();
      console.log("Done");
      return ret;
    } else if (op === "2") {
      const ret = await database.sqlleveltwo();
      console.log(sth);
      return ret;
    } else if (op === "3") {
      const ret = await sql_injection.sqllevelthree();
      console.log(sth);
      return ret;
    } else if (op === "4") {
      return 0;
    }
  },
};
