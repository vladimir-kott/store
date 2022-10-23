import {React} from "react";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Carousel from "./components/ui/carousel";
import Footer from "./components/ui/footer";
import ProductCard from "./components/ui/card";
import MenuBar from "./components/ui/menuBar";

function App() {

  const array = [20]

  return (
  <div>
    <NavBar/>
    <div className="container mx-auto">
      <Carousel/>
      <MenuBar/>
      <div className="my-1 px-1 w-full text-lg">
          <p>Популярные</p>
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 content-center m-auto justify-center">
        
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
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
