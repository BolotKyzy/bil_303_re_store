import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import BookstoreService from './services/bookstore-service';
import store from "./components/store";
import ErrorBoundry from "./components/error-boundry";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import App from "./components/app";


const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>

            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);