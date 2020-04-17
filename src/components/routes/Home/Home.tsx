import React from "react";
import { UserContext } from "../../../contexts/UserContext";

class Home extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => {
          return <div>{context.name}</div>;
        }}
      </UserContext.Consumer>
    );
  }
}

export default Home;
