import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Navigation/Header';
import JobDetailsContainer from './containers/JobDetailsContainer';
import JobFilterContainer from './containers/JobFilterContainer';
import JobListContainer from './containers/JobListContainer';
import LoginContainer from './containers/LoginContainer';
import PreviewContainer from './containers/PreviewContainer';

function App() {

  const user = useSelector(state=>state.login);
    const {userInfo} = user;

  return (
    <Router>
      <Header/>
      
      <Switch>
        {userInfo ? <Route exact path="/" component={JobListContainer} /> : <Redirect to="/login"/>}
        <Route path="/login" component = {LoginContainer}/> 
        <Route path="/job/filter" component={JobFilterContainer}/>
        <Route path="/job/details/:jobId" component={JobDetailsContainer}/>
        <Route path="/preview" component={PreviewContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
