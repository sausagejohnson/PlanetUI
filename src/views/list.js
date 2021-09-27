import { useSelector, useDispatch } from 'react-redux';
import { set_selected_planet } from '../actions/actions';
import Details from './details.js';

const List = () => {

    const dispatch = useDispatch();

    const planets = useSelector(state => state.planets);

    return (
        <div>
           <div className="list">
               <div className="planet-selection">
                    {
                        planets.map( planet => (
                            <div key={planet.id} className="planet-block" onClick={ () => dispatch({ type: 'SET_SELECTED_PLANET', id:planet.id}) }>{ planet.name }
                            </div>
                        ))
                    }   
                </div>
                <Details></Details>
            </div>
        </div>
        
    );
}

export default List;