import CartSidebar from "./components/cartSidebar";
import Cart from "./components/cartSidebar";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/navbar";
import Search from "./components/search";
import Page404 from "./pages/404Page";
import About from "./pages/about";
import Account from "./pages/account";
import Auth from "./pages/auth";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";
import CheckOut from "./pages/checkOut";
import Contact from "./pages/contact";
import FaQ from "./pages/faq";
import Home from "./pages/home";
import OrderCompleted from "./pages/orderCompleted";
import Product from "./pages/productDetail";
import ShipingAndReturn from "./pages/shippingAndTurn";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shoppingCart";
import StoreLocator from "./pages/storeLocator";
import { Switch, Route } from "react-router-dom"
import NewsLetterHorizontal from "./components/newsLetterHorizontal";
import NewsLetterVertical from "./components/newsLetterVertical";
import ModalProduct from "./components/modalProduct";
import ModalSizeChart from "./components/modalSizeChart";
import ModalWaitList from "./components/modalWaitList";
import { ABOUT_US, ACCOUNT, BLOG, BLOG_SLUG, CONTACT_US, CONTACT_US_SLUG, FAQ, HOME, LOGIN_REGISTER, ORDER_COMPLETE, SHIPING_RETURN, SHOP, SHOPPING_CART, SHOPPING_CART_CHECKOUT, SHOP_DETAIL } from "./constants/path";
import PrivateRouter from "./components/PrivateRouter";
import { useSelector } from "react-redux";
import ProductDetail from "./pages/productDetail";


function App() {
  const {user} = useSelector(store=>store.auth)
  
  return (
    <div className="App">
        <Header />
        <Nav />
        <NewsLetterHorizontal />
        <NewsLetterVertical />
        <Cart />
        <ModalProduct />
        <ModalSizeChart />
        <ModalWaitList />
        <Search />
        <CartSidebar />
        {/* Page */}
        <Switch>
          <Route exact path={HOME} component={Home} />
          <PrivateRouter path={ACCOUNT} component={Account} />
          <Route path={SHOP} exact component={Shop} />
          <Route path={BLOG} exact component={Blog} />
          <Route path={BLOG_SLUG} component={BlogPost} />
          <Route path={SHOPPING_CART} exact component={ShoppingCart} />
          <Route path={CONTACT_US_SLUG} component={StoreLocator} />
          <Route path={SHIPING_RETURN} component={ShipingAndReturn} />
          <Route path={SHOP_DETAIL} component={ProductDetail} />
          <Route path={ORDER_COMPLETE} component={OrderCompleted} />
          <Route path={FAQ} component={FaQ} />
          <Route path={CONTACT_US} component={Contact} />
          <Route path={SHOPPING_CART_CHECKOUT} component={CheckOut} />
          <Route path={LOGIN_REGISTER} component={Auth} />
          <Route path={ABOUT_US} component={About} />
          <Route component={Page404} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
