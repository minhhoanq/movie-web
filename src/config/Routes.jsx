import React from "react";

import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Switch>
            <Route 
                path='/:Category/search/:keyword'
                component={Catalog}
            />
            <Route 
                path='/:Category/:id'
                component={Detail}
            />
            <Route 
                path='/:Category'
                component={Catalog}
            />
            <Route 
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;