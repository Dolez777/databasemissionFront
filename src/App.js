
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Body from './components/body/body';
import Login from './login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ProductDetail from './pages/ProductDetail';

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/Login' element={<Login />}></Route>
        <Route
					path="/ProductDetail/:id"
					element={<ProductDetail  />}
				/>
    </Routes>
    <Body url={URL}/>

      <div className="Container">
      <Footer/>
      
  <p>ayoooo</p></div>
    </div>
  );
}

export default App;
