import React from 'react';
import { set_selected_planet } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const Favourites = () => {
    const dispatch = useDispatch();

    const favourites = useSelector(state => state.favourites);
    const planets = useSelector(state => state.planets);
    const favouritePlanets = planets.filter(p => favourites.includes(p.id))

    return (
        <div className="favourites">
            { favouritePlanets.length > 0 ?
                favouritePlanets.map( planet => (
                    <div key={planet.id} className="planet-block" onClick={ () => 
                        dispatch(set_selected_planet(planet.id)) 
                        }>{` \u2605 ${planet.name} `}
                    </div>
                ))
                : <span>No favourites yet.</span>
            }   
        </div>
    );
}

export default Favourites;