import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
function App() {


  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/movie/:id">
              <MovieDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;