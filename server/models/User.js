const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;
const Order = require("./Order");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      default: false,
    },
    isCreatedAt: {
      type: Date,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// has user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

//custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
