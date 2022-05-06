
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Body from './components/body/body';


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
