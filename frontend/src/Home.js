import './App.css'
import AppNavbar from './AppNavbar'
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import productList from "./ProductList";
import ProductEdit from "./Product-Add-Edit/ProductAdd";
import ProductList from "./ProductList";




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

