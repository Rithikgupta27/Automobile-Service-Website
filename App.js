import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ForgetPwd from './components/pages/ForgetPwd';
import Register from './components/pages/Register';
// import HomeAdmin from './components/AdminPages/HomeAdmin'

function App() {
  return (
    <>
      <Router>
      
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path="/register" component={ Register } />
          {/* <Route path="/homeadmin" component={ HomeAdmin } />  */}
          
        <Route path="/forget-password" component={ ForgetPwd } />

        </Switch>
        
      </Router>
      {/* <Router>
        <Switch>
        
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
