import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRemoteData, fetchLocalPlanetData } from './actions/actions';
import ListContainer from './views/list-container.js';
import Favourites from './views/favourites.js';
import LoadIndicator from './components/loadindicator.js';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect( () => { 
    dispatch(fetchRemoteData())
    //dispatch(fetchLocalPlanetData())
  }, [dispatch] );

  return (
    <div className="App">
      <h1>Planet Viewer</h1>
      <Router>
        <div className="tabs">
          <LoadIndicator></LoadIndicator>
          <Link to="/list">List</Link>
          <Link to="/favourites">Favourites</Link>  
        </div>
        <Route path="/list" component={ListContainer}></Route>
        <Route path="/favourites" component={Favourites}></Route>
        <Redirect to="/list" />
      </Router>
    </div>
  );
}

export default App;
