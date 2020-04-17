import React from "react";

export const UserContext = React.createContext({} as any);

export default class UserContextProvider extends React.Component {
  UserState = {
    uid: "developeryogeshgit@gmail.com",
  };
  render() {
    return (
      <UserContext.Provider value={{ ...this.UserState }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
