import {React} from "react";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Carousel from "./components/ui/carousel";
import Footer from "./components/ui/footer";

function App() {
  return (
  <div>
    <NavBar/>
    <div className="container mx-auto">
      <Carousel/>
      <Main/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
