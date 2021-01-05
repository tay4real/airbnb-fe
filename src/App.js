import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ListPlaces from "./components/ListPlaces";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Host from "./components/Host";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    showUserSettings: false,
  };

  handleShowUserSettings = () => {
    this.setState((prevState) => ({
      showUserSettings: !prevState.showUserSettings,
    }));
  };
  handleHideUserSettings = () => {
    this.setState({ showUserSettings: false });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar
            openUserSettings={this.handleShowUserSettings}
            closeUserSettings={this.handleHideUserSettings}
            userSetting={this.state.showUserSettings}
          />
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route path="/s" exact component={ListPlaces} />
          <Route path="/host/homes" exact component={Host} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
