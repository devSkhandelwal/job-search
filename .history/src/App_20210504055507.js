import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jobFilterContainer from './containers/jobFilterContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component = {LoginContainer}/> 
        <Route path="/job/filter" component={jobFilterContainer}
      </Switch>
    </Router>
  );
}

export default App;
