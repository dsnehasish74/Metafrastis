import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container'
import Landing from './components/landing'
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/meeting/:id" component={RoomContainer}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;