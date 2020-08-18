import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" render={props => <div>Landing Page</div>} />
          <Route path="/login" render={props => <div>Login Page</div>} />
          <Route path="/signup" render={props => <div>Signup Page</div>} />
          <Route path="/onboarding" render={props => <div>Onboarding Page</div>} />
          <Route path="/swipe" render={props => <div>Swipe Page</div>} />
          <Route
            path="/profile/:username"
            render={props => <div>Profile Page: {props.match.params.username}</div>}
          />
          <Route path="/matches" render={props => <div>Matches Page</div>} />
          <Route
            path="/group/:groupName"
            render={props => <div>Matches Page: {props.match.params.groupName}</div>}
          />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
