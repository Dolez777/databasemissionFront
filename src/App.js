
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import Footer from './Footer'
import Body from './body';
import login from './login';
import { Routes, Route } from "react-router-dom";

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
