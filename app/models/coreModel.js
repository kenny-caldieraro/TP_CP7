const client = require("../database");
class CoreModel {
  #id;
  created_at;
  updated_at;

  constructor(obj) {
    // if (isNaN(parseInt(obj.id, 10))) {
    //   throw new Error("CoreModel.id must be an integer");
    // }
    this.#id = obj.id;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }

  get id() {
    return this.#id;
  }

  insert = async (callback) => {
    const sql = {
      text: `INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES ($1, $2, $3, $4)`,
      values: [this.firstname, this.password, this.email, this.password],
    };
    try {
      await client.query(sql);
      callback(null, "Ajout effectué");
    } catch (error) {
      return callback(error.message, null);
    }
  };

  update = async (callback) => {
    const sql = {
      text: `UPDATE "user" SET "firstname" = $1, "lastname" = $2, "email" = $3, "password" = $4 WHERE id = $5`,
      values: [
        this.firstname,
        this.lastname,
        this.email,
        this.password,
        this.id,
      ],
    };
    try {
      await client.query(sql);
      callback(null, "Modification effectuée");
    } catch (error) {
      return callback(error.message, null);
    }
  };

  delete = async (callback) => {
    const sql = {
      text: `DELETE FROM "user" WHERE id = $1`,
      values: [this.id],
    };
    try {
      await client.query(sql);
      callback(null, "Suppression effectuée");
    } catch (error) {
      return callback(error.message, null);
    }
  };
}

module.exports = CoreModel;
