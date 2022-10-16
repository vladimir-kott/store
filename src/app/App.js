import {React} from "react";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Carousel from "./components/ui/carousel";
import Footer from "./components/ui/footer";
import ProductCard from "./components/ui/card";

function App() {

  const array = [20]

  return (
  <div>
    <NavBar/>
    <div className="container mx-auto">
      <Carousel/>
      <div className="flex">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <Main/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
