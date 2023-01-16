import {Component} from "react";
import './App.css'
import "./product-add-edit/ProductAdd";
import Carousel from 'react-bootstrap/Carousel';
import { withRouter } from 'react-router-dom'
import productList from "./ProductList";
import ProductEdit from "./product-add-edit/ProductAdd";
import ProductList from "./ProductList";

import AppNavbar from "./AppNavbar";


function Home() {
    return(
        <body>
        <AppNavbar/>
        <section>
            <div className="section">
                <div className="section2">
                    <div className="container"  >
                        <ProductList/>
                    </div>

                </div>
            </div>

        </section>

        </body>
    );
}

export default Home;
