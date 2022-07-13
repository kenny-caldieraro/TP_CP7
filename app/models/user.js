const CoreModel = require("./coreModel");
const client = require("../database");

class User extends CoreModel {
  email;
  password;
  firstname;
  lastname;

  constructor(obj, callback) {
    super(obj);

    if (typeof obj.email !== "string") {
      throw new Error("USer.email must be a string");
    }
    this.email = obj.email;

    if (typeof obj.password !== "string") {
      throw new Error("User.password must be a string");
    }
    this.password = obj.password;

    if (typeof obj.firstname !== "string") {
      throw new Error("User.firstname must be a string");
    }
    this.firstname = obj.firstname;

    if (typeof obj.lastname !== "string") {
      throw new Error("User.lastname must be a string");
    }
    this.lastname = obj.lastname;
  }

  get fullname() {
    return this.firstname + " " + this.lastname;
  }

  static findAll = async (callback) => {
    try {
      const results = await client.query(`SELECT * FROM "user"`);
      if (!results.rowCount) {
        return callback(null, null);
      } else {
        const users = [];
        results.rows.forEach((user) => {
          users.push(new User(user));
        });
        return callback(null, users);
      }
    } catch (error) {
      return callback(error, null);
    }
  };

  static findById = async (id, callback) => {
    const sql = {
      text: `SELECT * FROM "user" WHERE id=$1`,
      values: [id],
    };
    try {
      const results = await client.query(sql);
      if (!results.rowCount) {
        return callback(null, null);
      } else {
        const user = new User(results.rows[0]);
        return callback(null, user);
      }
    } catch (error) {
      return callback(error, null);
    }
  };
}

module.exports = User;
