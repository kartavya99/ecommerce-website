const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_RUI || "mongodb://localhost/e-comm-shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.export = mongoose.connection;
