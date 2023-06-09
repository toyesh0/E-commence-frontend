import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


const App = () => {
  const user = true
  return (
    <Router>
        <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/products/:category">
                <ProductList/>
            </Route>
            <Route path = "/product/:id">
                <Product/>
            </Route>
            <Route path = "/cart">
                <Cart/>
            </Route>
            <Route path = "/login">
            {user ? <Redirect to = "/"/> : <Login/>}
            </Route>
            <Route path = "/register">
            {user ? <Redirect to = "/"/> : <Register/>}
            </Route>
        </Switch>
    </Router>
  );
};

export default App;