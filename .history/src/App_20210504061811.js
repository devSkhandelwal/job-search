import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jobFilterContainer from './containers/jobFilterContainer';
import JobListContainer from './containers/JobListContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component = {LoginContainer}/> 
        <Route path="/job/filter" component={jobFilterContainer}/>
        <Route path="jobs?" component={JobListContainer} />
      </Switch>
    </Router>
  );
}

export default App;
