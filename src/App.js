import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import reactRouterDom from 'react-router-dom';
import connexion from "./pages/connexion/index"
import Register from './pages/register/index';
import home from './components/home/index'
//import navbar from './components/Headers/test'
import sidbar from './components/Sidebar/index'
import Footer from './components/Footers';
import Profil from './pages/Profil';
import First from './pages/First';
import Cours from './pages/Cours';
import Acceuil from './pages/Acceuil';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={First} />
          <Route path="/Connexion" exact component={connexion} />
          <Route path="/register" exact component={Register} />
          <Route path="/etudiant/dashboard" exact component={Acceuil} />
          <Route path="/sidebar" exact component={sidbar} />
          <Route path="/etudiant/profil" exact component={Profil} />
          <Route path="/Cours" exact component={Cours} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
