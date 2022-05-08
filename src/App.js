
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import NavbarComp from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Body from './components/body/body';
import Login from './login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ProductDetail from './pages/ProductDetail';
=======
import NavbarComp from './Navbar';
import Footer from './Footer'
import Body from './body';
>>>>>>> parent of 48d78c5 (Merge branch 'main' into Transaction_1)

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp>

      </NavbarComp>
      <Body url={URL}/>
      <Footer/>
        
     
    </div>
  );
}

export default App;
