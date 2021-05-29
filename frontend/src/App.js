import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container.js'
import Landing from './components/landing.js'
import Join from './components/Join.js'
import Create from './components/create.js'

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/meeting" component={RoomContainer}/>
        <Route path="/join-meeting" component={Join}/>
        <Route path="/create-meeting" component={Create}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;