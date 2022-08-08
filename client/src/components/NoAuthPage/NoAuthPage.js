import React from "react";
import Jumbotron from "./Jumbotron";

const styles = {
  container: {
    minHeight: "100vh",
  },
};

const NoAuthPage = () => {
  return (
    <div style={styles.container}>
      <Jumbotron>
        <h1>You need to be an Admin to visit this page</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoAuthPage;
