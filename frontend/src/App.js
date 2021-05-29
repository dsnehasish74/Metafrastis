import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RoomContainer from './components/room_container'
import Landing from './components/landing.js'
import Join from './components/Join.js'
import Create from './components/create.js'
import {UserProvider} from './provider/userprovider.js'
import './App.css'
import { LangProvider } from "./provider/langprovider";

function App() {
  return (
    <UserProvider>
      <LangProvider>
      <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/meeting/:id" component={RoomContainer}/>
        <Route path="/join-meeting" component={Join}/>
        <Route path="/create-meeting" component={Create}/>
        <Redirect to="/"/>
      </Switch>
      </Router>
      </div>
      </LangProvider>
    </UserProvider>
  );
}

export default App;