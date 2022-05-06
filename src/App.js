
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import Footer from './Footer'
import Body from './body';
import Login from './login';
import { Routes, Route } from "react-router-dom";

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
      <Body url={URL}/>
      <Footer/>
      
    </div>
  );
}

export default App;
