const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const colors = require("colors");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//Create a mew instance of an Apollo server with the GraphQL Schema
const startApolloServer = async (typeDefs, resolver) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on PORT ${PORT}`.yellow.bold.underline);
      console.log(
        `USE GraphQL at http://localhost:${PORT}${server.graphqlPath}`.cyan.bold
          .underline
      );
    });
  });
};

//Call the async function to start the server
startApolloServer(typeDefs, resolvers);
