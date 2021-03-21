import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
//import wallet from './img/wallet.jpg';

function App() {
  return (
    <div className="projects App">
    <BrowserRouter>
    
      <Route path="/" component={Nav} />
        
     
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/createwallet" exact component={CreateWallet} />
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;