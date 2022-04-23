
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import Footer from './Footer'
import Body from './body';
import { Routes, Route } from 'react-router-dom';

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp>

      </NavbarComp>
      TÄHÄN JOTAIN PELEJÄ
      <Routes>
        <Route path="/games" element={<Body url={URL}/>} /> 
      
      </Routes>
      <Footer/>
        
     
    </div>
  );
}

export default App;
