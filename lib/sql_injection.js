const inquirer = require("./inquirer");
const sqlLevelOne = require("./sql/sqlLevelOne");

module.exports = {
  showMenu: async () => {
    const asw = await inquirer.sqlMenuOptions();
    const op = asw.sqlselect;
    if (op === "1") {
      const ret = await sqlLevelOne.export();
      console.log(ret);
      return ret;
    } else if (op === "2") {
      const ret = await sqlLevelTwo.export();
      console.log(ret);
      return ret;
    } else if (op === "3") {
      const ret = await sqlLevelThree.export();
      console.log(ret);
      return ret;
    } else if (op === "4") {
      return 0;
    }
  },
};
