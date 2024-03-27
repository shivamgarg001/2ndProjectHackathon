import './App.css';
import Nav  from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/Add_Product';
import Products from './components/Products';
import UpdateProduct from './components/Update_Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>

        <Route path="/products" element={<Products/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/update-product/:id" element={<UpdateProduct/>} />
        <Route path="/logout" element={<h1>Logout Page Component</h1>} />
        
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;