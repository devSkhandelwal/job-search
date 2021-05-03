import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component = {LoginContainer}/> 
      </Switch>
    </Router>
  );
}

export default App;
