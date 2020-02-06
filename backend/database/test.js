const knex = require("./config/db").knex;
const Account = require("./model/accounts");

Account.fetchAll()
  .then(result => result.models.map(val => val.attributes.name))
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
