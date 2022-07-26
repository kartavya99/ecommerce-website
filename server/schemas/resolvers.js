const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order } = require("../schemas");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user.id).populate("Order");
      }
      throw new AuthenticationError();
    },
  },
};

module.exports = resolvers;
