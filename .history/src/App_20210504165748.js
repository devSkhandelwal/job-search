import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Navigation/Header';
import PrivateRoute from './components/PrivateRoutes';
import JobDetailsContainer from './containers/JobDetailsContainer';
import JobFilterContainer from './containers/JobFilterContainer';
import JobListContainer from './containers/JobListContainer';
import LoginContainer from './containers/LoginContainer';
import PreviewContainer from './containers/PreviewContainer';

function App() {

  

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={JobListContainer} />
        <PrivateRoute path="/job/filter" component={JobFilterContainer}/>
        <PrivateRoute path="/job/details/:jobId" component={JobDetailsContainer}/>
        <PrivateRoute path="/preview" component={PreviewContainer}/>
        <Route path="/login" component = {LoginContainer}/> 
        
      </Switch>
    </Router>
  );
}

export default App;
