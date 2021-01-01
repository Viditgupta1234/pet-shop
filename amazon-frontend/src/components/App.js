import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart';
import SignIn from '../pages/SignIn'
import Register from "../pages/Register"
import ShippingAddress from '../pages/ShippingAddress';

const App = () => {


    return (
        <>

        <Router>
            <Header/>

            <Switch>
                <Route exact path="/cart/:id?" component={Cart}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route path="/products/product/:id" component={ProductPage}></Route>
                <Route path="/shipping" component={ShippingAddress}></Route>
                <Route path="/" component={Home} exact></Route>
            </Switch>
            
            
            

        </Router>

        </>
        
    )
}

export default App
