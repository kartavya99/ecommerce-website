const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");
const colors = require("colors");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
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

    singleUser: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          return await User.findById(_id);
        }
      }
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },

    getAllProducts: async (parent, args) => {
      return await Product.find({});
    },

    order: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate("User");
        return user.orders.id(id);
      }

      throw new AuthenticationError("You need to be logged in");
    },

    getOrder: async (parent, { _id }, context) => {
      return await Order.findById(_id);
    },

    getAllOrder: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          return await Order.find({});
        }
      }
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

    updateUserProfile: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("You need to be logged in");
    },

    deleteUser: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        console.log(user);
        if (user.isAdmin) {
          return await User.findByIdAndDelete(_id);
        } else {
          throw new AuthenticationError("Only Admin can delete user");
        }
      }
    },

    updateUser: async (
      parent,
      { _id, firstName, lastName, email, isAdmin },
      context
    ) => {
      if (context.user) {
        const user = await user.findById(context.user._id);
        if (user.isAdmin) {
          return await User.findByIdAndUpdate({
            _id,
            firstName,
            lastName,
            email,
            isAdmin,
          });
        }
      }
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

    updateProduct: async (
      parent,
      { _id, productName, image, brand, description, price, countInStock },
      context
    ) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          return await Product.findByIdAndUpdate({
            _id,
            productName,
            image,
            brand,
            description,
            price,
            countInStock,
          });
        }
      }
    },

    deleteProduct: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          return await Product.findOneAndDelete({
            _id,
          });
        }
      }
    },

    createOrder: async (parent, args, context) => {
      console.log(JSON.stringify(args));
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        taxPrice,
        shippingPrice,
      } = args;
      if (context.user) {
        const order = new Order({
          orderItems,
          shippingAddress,
          paymentMethod,
          totalPrice,
          taxPrice,
          shippingPrice,
        });

        await Order.create({
          orderItems,
          shippingAddress,
          paymentMethod,
          totalPrice,
          taxPrice,
          shippingPrice,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return { order };
      }
      throw new AuthenticationError("You need to be logged in");
    },

    //require assistance to finish this route
    UpdateOrderToPaid: async (
      parent,
      { isPaid, paidAt, paymentResult },
      context
    ) => {
      if (context.user) {
        const order = await Order.findById(_id);

        if (order) {
          (order.isPaid = true),
            (order.paidAt = Date.now()),
            (order.paymentResult = {});
        }

        const updatedOrder = await order.save();
        return updatedOrder;
      } else {
        throw new Error("Order not found");
      }
    },

    UpdateOrderToDelivered: async (
      parent,
      { isDelivered, deliveredAt },
      context
    ) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        if (user.isAdmin) {
          const order = await Order.findById(_id);

          if (order) {
            (order.isDelivered = true), (order.deliveredAt = Date.now());
            // how to update on mongodb

            const updatedOrder = await order.update();
          } else {
            throw new Error("Order not found");
          }
        }
      }
    },
  },
};

module.exports = resolvers;
