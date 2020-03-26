import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import store from "./store"
import Login from "./components/Landing/Login"
import AddUser from "./components/add-user/AddUser"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/add-user" component={AddUser} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
