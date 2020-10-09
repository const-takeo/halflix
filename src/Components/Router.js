import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";
import Detail from "Routes/Detail";

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
                <Route path="/movie/:id">
                    <Detail/>
                </Route>
                <Route path="/show/:id">
                    <Detail/>
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
export default AppRouter;
