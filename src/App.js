import react from 'react';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import CandidateSearch from './components/CandidateSearch';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/login' element={<Login/> }></Route>
      <Route exact path='/search' element={<CandidateSearch/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}







export default App;
