import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";


const AppRouter = () => (    
    <Router>
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/tv">
                    <TV/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
export default AppRouter;
