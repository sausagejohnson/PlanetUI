import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import List from './views/list.js';
import Favourites from './views/favourites.js';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { fetchRemoteData, fetchLocalPlanetData } from './actions/actions';
import LoadIndicator from './components/loadindicator.js';

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
        <Route path="/list" component={List}></Route>
        <Route path="/favourites" component={Favourites}></Route>
        <Redirect to="/list" />
      </Router>
    </div>
  );
}

export default App;
