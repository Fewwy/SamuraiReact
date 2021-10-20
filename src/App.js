import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsList={props.appState.sideBar.friendsList}/>
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile posts={props.appState.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.appState.dialogsPage.dialogsData}
                messagesData={props.appState.messagesPage.messagesData}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
