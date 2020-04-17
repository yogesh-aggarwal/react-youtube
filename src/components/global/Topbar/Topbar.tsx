import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./Topbar.scss";
import "./UserPanel.scss";

class Topbar extends React.Component {
  toggleSideMenu() {
    console.log("Toggled");
  }

  queryBoxFocus() {
    document.getElementById("query-box").style.border = "2px solid #575757";
    document.getElementById("query-box").style.borderRight = "none";
    document.getElementById("query-icon").style.border = "2px solid #575757";
    document.getElementById("query-icon").style.borderLeft = "none";
  }

  queryBoxBlur() {
    document.getElementById("query-box").style.border = "none";
    document.getElementById("query-icon").style.border = "none";
  }

  openUserPanel() {
    let display: string = document.getElementById("user-panel").style.display;
    document.getElementById("user-panel").style.display =
      display === "none" || !display ? "block" : "none";
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => {
          return (
            <div className="topbar-container">
              <div className="tools">
                <div className="sidebar-switch" onClick={this.toggleSideMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="logo"></div>
              </div>
              <div className="search-bar">
                <div
                  className="content"
                  onFocus={this.queryBoxFocus}
                  onBlur={this.queryBoxBlur}
                >
                  <div className="input">
                    <input
                      type="text"
                      id="query-box"
                      placeholder="Search YouTube"
                    />
                  </div>
                  <div className="icon" id="query-icon">
                    <div className="icon"></div>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option upload"></div>
                <div className="option browse"></div>
                <div className="option notification"></div>
                <div className="option user" onClick={this.openUserPanel}></div>
                {/* User pannel */}
                <div className="user-panel" id="user-panel">
                  Hello
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Topbar;
