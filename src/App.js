import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Testimonial from './Pages/Testimonial';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact';
// import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/testimonial' component={Testimonial} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route exact path='/sign' component={Signup} /> */}
        </Switch>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
