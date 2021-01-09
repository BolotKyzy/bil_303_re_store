import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {HomePage, CardPage} from "../pages";
import ShopHeader from "../shop-header";
const App = () => {
    return (
        <main role = "main" className= "container">
            <ShopHeader numItems={ 5 } total={210} />
            <Switch>
                <Route
                    path="/card"
                    component={CardPage}

                />
                <Route
                path= "/"
                component = {HomePage}
                exact />

            </Switch>
        </main>

    )
};
export default App;