import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Router} from 'react-router-dom';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Order from './components/Order';
import Catering from './components/Catering';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/catering" component={Catering} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
