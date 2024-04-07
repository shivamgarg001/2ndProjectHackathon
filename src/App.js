import './App.css';
import Nav  from './components/Nav';

import SignUp from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
// import AddProduct from './components/Add_Product';
// import Products from './components/Products';
// import UpdateProduct from './components/Update_Product';

import Payment from './components/Payment';
import Events from './components/Events';
import Ticket from './components/Ticket';
import About from './components/About';
import Contact from './components/Contact';
import Rules from './components/Rules';
import Amenties from './components/Amenties';
import Festive from './components/Festive';
import Official from './components/Official';

import Profile from './components/Profile';
import Voteascand from './components/VoteAsCand';
import Votetocand from './components/VoteToCand';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        
        <Route path="/payment" element={<Payment/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/ticket" element={<Ticket/>} />
        <Route path="/votetocand" element={<Votetocand/>} />
        <Route path="/voteascand" element={<Voteascand/>}/>
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="/update-product/:id" element={<UpdateProduct/>} /> */}
        <Route path="/logout" element={<h1>Logout Page Component</h1>} />
        
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/rules" element={<Rules/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/amenties" element={<Amenties/>} />
        <Route path="/festive" element={<Festive/>} />
        <Route path="/official" element={<Official/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
    
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;