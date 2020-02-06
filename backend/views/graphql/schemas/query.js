const { GraphQLObjectType, GraphQLList } = require("graphql");
const { AccountTypes } = require("./types");
const knex = require("../../../database/config/db").knex;
const Account = require("../../../database/model/accounts");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "",
  type: "Query",
  fields: {
    accounts: {
      type: new GraphQLList(AccountTypes),
      resolve(source, args, context, info) {
        return Account.fetchAll()
          .then(result => result.models.map(val => val.attributes))
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            knex.destroy();
          });
      }
    }
  }
});

exports.query = RootQuery;
