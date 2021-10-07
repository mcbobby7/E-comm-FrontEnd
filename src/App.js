import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/cart/CartScreen";
import LoginScreen from "./screens/login/LoginScreen";
import SignUpScreen from "./screens/signUp/index";
import Forgot from "./screens/forgotPassword/index";
import Reset from "./screens/forgotPassword copy/index";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/order/OrderScreen";
import UserListScreen from "./screens/user-list/UserListScreen";
import UserEditScreen from "./screens/edit-user/UserEditScreen";
import ProductListScreen from "./screens/product-list/ProductListScreen";
import ProductEditScreen from "./screens/edit-product/ProductEditScreen";
import OrderListScreen from "./screens/order/OrderListScreen";
import Search from "./screens/search/search";
// import "./assets/css/flex-slider.css";
import "./assets/css/fontawesome.css";
// import './assets/css/owl.css'
import "./assets/css/tooplate-main.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <div>
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/signup" component={SignUpScreen} />
          <Route path="/auth/reset-password/:token" component={Reset} />
          <Route path="/auth/forgot-password" component={Forgot} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userList" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={Search} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={Search}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
        </div>
      </main>
    </Router>
  );
};

export default App;
