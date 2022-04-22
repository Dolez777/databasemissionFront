
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import Footer from './Footer'
import Body from './body';

const URL = 'http://localhost/databasemissionBack/';

function App() {
  return (
    <div className='App'>
      <NavbarComp>

      </NavbarComp>
      TÄHÄN JOTAIN PELEJÄ
      <Body url={URL}/>
      <Footer/>
        
     
    </div>
  );
}

export default App;
