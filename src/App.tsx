import React from "react";
import Home from "./components/routes/Home/Home";
import Subscriptions from "./components/routes/Subscriptions/Subscriptions";

import UserContextProvider from "./contexts/UserContext";
import Sidebar from "./components/global/Sidebar/Sidebar";
import Topbar from "./components/global/Topbar/Topbar";

import "./App.scss";
import "./styles.scss";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Topbar />
        <Sidebar />
        <div className="container">
          <Home />
          <Subscriptions />
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;
