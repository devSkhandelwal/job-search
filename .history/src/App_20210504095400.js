import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobDetailsContainer from './containers/JobDetailsContainer';
import JobFilterContainer from './containers/JobFilterContainer';
import JobListContainer from './containers/JobListContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component = {LoginContainer}/> 
        <Route path="/job/filter" component={JobFilterContainer}/>
        <Route exact path="/" component={JobListContainer} />
        <Route path="/job/details/:jobId" component={JobDetailsContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
