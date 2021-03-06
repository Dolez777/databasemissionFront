
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/Navbar';
import Body from './components/body/body';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ProductDetail from './pages/ProductDetail';
import Games from './pages/AdminPage';

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/src/pages/AdminPage.jsx" element={< Games/>} />
        <Route path="/ProductDetail/:id" element={<ProductDetail  />}/>
        <Route path="/src/pages/login.jsx" element={<Login/>}/>
        
    </Routes>
    

     
    </div>
  );
}

export default App;
