import React from "react";
import { UserContext } from "../../../contexts/UserContext";

class Sidebar extends React.Component {
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

export default Sidebar;
