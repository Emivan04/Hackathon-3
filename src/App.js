import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'; 
import Categories from './Components/Categories/Categories';
import RandomMeal from './Components/RandomMeal/RandomMeal';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Login from './Components/Avtorizacia/Login/Login';
import Registr from './Components/Avtorizacia/Registr/Registr';
// import Description from './Components/Description/Description';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registr" component={Registr}/>
        {/* <Route exact path="/description" component={Description}/>   */}
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;