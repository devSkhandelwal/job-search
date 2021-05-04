import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobFilterContainer from './containers/JobFilterContainer';
import JobListContainer from './containers/JobListContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component = {LoginContainer}/> 
        <Route path="/job/filter" component={JobFilterContainer}/>
        <Route path="/jobs?" component={JobListContainer} />
      </Switch>
    </Router>
  );
}

export default App;
