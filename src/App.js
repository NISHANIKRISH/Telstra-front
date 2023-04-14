import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ProductListing from "./containers/ProductListing";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Navbar from "./containers/Navbar";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import Footer from "./containers/Footer"
import ProductComponent from "./containers/ProductComponent"
import Watches from "./containers/Watches"
import Headsets from "./containers/Headsets"



function App() {
  return (
    <div className="App">
   
      <Router>
      
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/phones" exact component={ProductListing} /> */}
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/phones" exact component={ProductComponent} />
          <Route path="/watch" exact component={Watches} />
          <Route path="/headsets" exact component={Headsets} />

          <Route path="/footer" exact component={Footer} />

          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/signup" component={Signup} />
          <Route path="/Login" component={Login} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
