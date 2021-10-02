import { useSelector, useDispatch } from 'react-redux';
import { set_selected_planet } from '../actions/actions';
import PlanetItem from './planet-item.js';

const List = () => {

    const dispatch = useDispatch();

    const planets = useSelector(state => state.planets);
    const selectedPlanet = useSelector(state => state.selectedPlanet);

    return (
        <div className="list">
            {
                planets.map( planet => (
                    <PlanetItem key={planet.id} planet={planet} onClick={ () => 
                        dispatch(set_selected_planet(planet.id)) } 
                        active={selectedPlanet && selectedPlanet === planet.id }
                        >
                    </PlanetItem>
                ))
            }   
        </div>
    );
}

export default List;