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
import Dossier from './pages/dossier'
import Acceuil from './pages/Acceuil';
import ajoutCoursForm

from './pages/ajoutCoursForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={First} />
          <Route path="/Connexion" exact component={connexion} />
          <Route path="/register" exact component={Register} />
          <Route path="/etudiant/acceuil" exact component={Acceuil} />
          <Route path="/sidebar" exact component={sidbar} />
          <Route path="/etudiant/profil" exact component={Profil} />
          <Route path="/Cours" exact component={Cours} />
          <Route path="/DCours" exact component={Dossier} />

          <Route path="/ajoutCoursForm" exact component={ajoutCoursForm}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
