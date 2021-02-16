import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/Signup'>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
