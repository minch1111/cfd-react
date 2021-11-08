import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/navbar";
import Promo from "./components/promo";
import Home from "./pages/home";
import Shop from "./pages/shop";


function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Promo/>
        {/* <Home/> */}
        <Shop />
        <Footer />
    </div>
  );
}

export default App;
