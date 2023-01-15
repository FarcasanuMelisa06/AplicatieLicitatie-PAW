
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import React,{Component} from "react";
import Home from './Home'
import ProductList from "./ProductList";
import ProductAdd from "./Product-Add-Edit/ProductAdd";
import ProductEdit from "./Product-Add-Edit/ProductEdit";
import Login from "./loginRegister/Login";
import Register from "./loginRegister/Register";
import Productpage from "./productpage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await fetch('/products');
        const body = await response.json();
        this.setState({products: body});
    }


    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true}><Home/></Route>
                    <Route path='/products' exact={true}><ProductList/></Route>
                    <Route path='/products/:id'><ProductAdd/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route path = '/register'><Register/></Route>
                    <Route path = '/productEdit'><ProductEdit/></Route>
                    <Route path='/products_page/:id'><Productpage/></Route>

                </Switch>
            </Router>
        )
    }
}

export default App;