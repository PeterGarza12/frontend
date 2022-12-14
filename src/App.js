import React            from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login            from './pages/login/index';
import Register         from './pages/register';
import Main             from './pages/main/main';
import Menu             from './pages/menú';
import Cart             from './pages/cart';
import Product          from './pages/product/product';
import Test             from './pages/test/test';
import Error404         from './pages/404/index'
import Profile          from './pages/profile';
import ReportByUser     from './pages/reports/reportByUser/reportByUser';

import './App.css';

function App() {
  //Agregué el dflex y eso para hace rprueba de diseño de login
  //En este momento afectaría a todas las pantallas si no me equivoco
  return (
    <div className="App d-flex justify-content-center">
      <Router>
        <Routes>
          <Route exact path="/"                     element={<Main/>}>             </Route>
          <Route exact path="/login"                element={<Login/>}>            </Route>
          <Route exact path="/register"             element={<Register/>}>         </Route>
          <Route exact path="/profile"              element={<Profile/>}>          </Route>
          <Route exact path="/test"                 element={<Test/>}>             </Route>
          <Route exact path="/menu/:id"             element={<Menu/>}>             </Route>
          <Route exact path="/cart"                 element={<Cart/>}>             </Route>
          <Route exact path="/product/:id"          element={<Product/>}>          </Route>
          <Route exact path="/reportByUser"         element={<ReportByUser/>}>     </Route>
          <Route path="*"                           element={<Error404/>}>         </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
