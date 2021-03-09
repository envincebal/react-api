import React from "react";
import PhotoList from "./components/PhotoList/PhotoList";
import UserInfo from "./components/UserInfo/UserInfo";
import {Route, Switch} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PhotoList}/>
        <Route path="/users/:username" exact component={UserInfo}/>
      </Switch>
    </div>
  );
}

export default App;