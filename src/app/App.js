import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignUp from "../views/Register/Register";
import LogIn from "../views/LogIn/LogIn";
import ProductManage from "../views/productManage/productManage";
import CartManage from "../views/cartManage/CartManage";
import User from "../views/user/User";
import Dashboard from "../views/Dashboard";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<LogIn/>}/>
              <Route exact path='/signup' element={<SignUp/>}/>
              <Route exact path='/dashboard' element={<Dashboard/>}/>
              <Route exact path='/products' element={<ProductManage/>}/>
              <Route exact path='/cart' element={<CartManage/>}/>
              <Route exact path='/user' element={<User/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
