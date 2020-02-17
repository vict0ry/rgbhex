import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="main-app">
                    <Navbar/>
                    <Route exact path='/' component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
