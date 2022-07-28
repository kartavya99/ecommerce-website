const { GraphQLScalarType, Kind } = require("graphql");

const dateScaler = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTIme(); // Convert outgoing Date to integer for JSON
  },
  parseLiteral(ast) {
    if ((ast.kind = Kind.INT)) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});
