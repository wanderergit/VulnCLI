const mysql = require("mysql");

var dbCreated = 0;
var tbCreated = 0;
module.exports = {
  createDatabase: async () => {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "qqQQ11!!",
    });

    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      if (dbCreated == 0) {
        con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
          if (err) throw err;
          dbCreated = 1;
          console.log("Database created");
        });
      } else {
        console.log("Database exists");
      }
    });
    return 1;
  },
  //populate db
  populateDatabase: async () => {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "qqQQ11!!",
      database: "mydb",
    });

    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      if (tbCreated == 0) {
        var sql =
          "CREATE TABLE IF NOT EXISTS books (number INT NOT NULL, bookname VARCHAR(50) NOT NULL, authorname VARCHAR(50) NOT NULL)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('Table "books" created');
          tbCreated = 1;
        });
        var sql =
          "CREATE TABLE IF NOT EXISTS flags (flag VARCHAR(50) NOT NULL)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('Table "flags" created');
          tbCreated = 1;
        });
        var sql =
          "CREATE TABLE IF NOT EXISTS secret (username VARCHAR(56) NOT NULL, password VARCHAR(56) NOT NULL)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('Table "secret" created');
          tbCreated = 1;
        });
        var sql =
          "CREATE TABLE IF NOT EXISTS users (firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, username  VARCHAR(50) NOT NULL, password   VARCHAR(50) NOT NULL)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('Table "users" created');
          tbCreated = 1;
        });
        var sql =
          "INSERT INTO books (number, bookname, authorname) VALUES (1, 'SILMARILLION', 'J.R.R TOLKIEN')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (2, "DUNE", "FRANK HERBERT")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (3, "THE HUNGER GAMES", "SUZANNE COLLINS")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (4, "HARRY POTTER AND THE ORDER OF THE PHONEIX", "J.K ROWLING")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (5, "TO KILL A MOCKINGBIRD", "HARPER LEE")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (6, "TWILIGHT", "STEPHEINE MEYER")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        var sql =
          'INSERT INTO books (number, bookname, authorname) VALUES (7, "THE MICE MAN", "GEORGE COCKCROFT")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "books"');
        });
        //book population done
        var sql = 'INSERT INTO flags (flag) VALUES ("You hacked me!")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "flag"');
        });
        var sql = 'INSERT INTO flags (flag) VALUES ("SQL Injection is easy?")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "flag"');
        });
        //flag population done
        var sql =
          'INSERT INTO secret (username, password) VALUES ("admin", "password")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "secret"');
        });
        //secret population done
        var sql =
          'INSERT INTO users (firstname, lastname, username, password) VALUES ("John","Doe", "Admin", "password")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "users"');
        });
        var sql =
          'INSERT INTO users (firstname, lastname, username, password) VALUES ("Alice","Carrol", "Rabbit", "White")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "users"');
        });
        var sql =
          'INSERT INTO users (firstname, lastname, username, password) VALUES ("Bruce","Batman", "Alfred", "Batmobile")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "users"');
        });
        var sql =
          'INSERT INTO users (firstname, lastname, username, password) VALUES ("Dare","Devil", "HackMe", "IfY0UC4N")';
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log('1 record inserted in "users"');
        });
      } else {
        console.log("Table exists");
      }
    });
    return 1;
  },
  //sqlOne
  sqlOne: async () => {
    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword",
      database: "mydb",
    });

    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("SELECT * FROM books WHERE number = '1'", function (
        err,
        result
      ) {
        if (err) throw err;
        console.log("\n\n\n\n\n\n\n\n\n\n" + result);
      });
    });
    return 1;
  },
};
