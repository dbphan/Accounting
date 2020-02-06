const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);

const Account = bookshelf.Model.extend({
  tableName: "accounts"
});

module.exports = Account;
