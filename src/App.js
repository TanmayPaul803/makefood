import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import AboutCatagory from "./Components/AboutCatagory";
import AboutRecipe from "./Components/AboutRecipe";
import Recipes from "./Components/Recipes";
import ContactUs from "./Components/ContactUs";

import SideNav from "./Components/SideNav";
import AOS from "aos";
import "aos/dist/aos.css";

// import { ToastContainer, toast } from "react-toastify";

const App = () => {
  AOS.init({
    //initialize other settings
  });
  return (
    <div className="App">
      <div className="AppContainer">
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/name" component={AboutCatagory} />
          <Route path="/aboutRecipe" component={AboutRecipe} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/sidenav" component={SideNav} />
        </Switch>
      </div>
    </div>
  );
};
export default App;
