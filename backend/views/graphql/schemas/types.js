const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const AccountTypes = new GraphQLObjectType({
  name: "Accounts",
  type: "Query",
  fields: {
    guid: { type: GraphQLString },
    name: { type: GraphQLString },
    accountType: { type: GraphQLString },
    commodityGuid: { type: GraphQLString },
    commodityScu: { type: GraphQLInt },
    nonStdScu: { type: GraphQLInt },
    parentGuid: { type: GraphQLString },
    code: { type: GraphQLString },
    description: { type: GraphQLString },
    hidden: { type: GraphQLInt },
    placeholder: { type: GraphQLInt }
  }
});

exports.AccountTypes = AccountTypes;
