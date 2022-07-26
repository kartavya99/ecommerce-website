const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");
const colors = require("colors");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        return await User.findById(context.user._id);
      }

      throw new AuthenticationError();
    },

    users: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          return await User.find({});
        }

        throw new AuthenticationError("You need to be logged in");
        // return [];
      }
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },

    order: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate("User");
        return user.orders.id(id);
      }

      throw new AuthenticationError("You need to be logged in");
    },
  },

  Mutation: {
    createUser: async (
      parent,
      { firstName, lastName, email, password, isAdmin }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        isAdmin,
      });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "Incorrect email for now - change error message later on"
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError(
          "Incorrect password - change error message later on"
        );
      }

      const token = signToken(user);

      return { token, user };
    },

    createProduct: async (
      parent,
      { productName, image, brand, description, price, countInStock },
      context
    ) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        if (user.isAdmin) {
          console.log(user);
          return await Product.create({
            user,
            productName,
            image,
            brand,
            description,
            price,
            countInStock,
          });
        }
      }

      throw new AuthenticationError("You need to be logged in");
    },

    createOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });
        return order;
      }
      throw new AuthenticationError("You need to be logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;
