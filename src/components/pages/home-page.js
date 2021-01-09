import React from "react";
import BookListContainer from "../book-list";
import ShoppingCartTable from "../shopping-card-table";
import './home-page.css';
const HomePage = () => {

    return (
        <div className= "shopping-cart-table ">
            <BookListContainer />
            <ShoppingCartTable/>

        </div>
    )
};

export default HomePage;