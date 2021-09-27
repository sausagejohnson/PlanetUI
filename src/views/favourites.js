import React from 'react';
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
                    <div key={planet.id} className="planet-block" onClick={ () => dispatch({ type: 'SET_SELECTED_PLANET', id:planet.id}) }>{` \u2605 ${planet.name} `}
                    </div>
                ))
                : <span>No favourites yet.</span>
            }   
        </div>
    );
}

export default Favourites;