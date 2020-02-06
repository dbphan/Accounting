var express = require("express");
var router = express.Router();
var graphqlHTTP = require("express-graphql");
var { buildSchema, GraphQLSchema } = require("graphql");
const { query } = require("../views/graphql/schemas/query");

const schema = new GraphQLSchema({
  query
});

var root = { hello: () => "Hello world!" };

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

module.exports = router;
