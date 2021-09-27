import { set_a_favourite } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const Details = (props) => {

    const dispatch = useDispatch();

    const planets = useSelector(state => state.planets);
    const selectedPlanet = useSelector(state => state.selectedPlanet);
    const favourites = useSelector(state => state.favourites);

    const planet = planets[selectedPlanet];

    const isFavourite = (favourites.filter(i=>i === selectedPlanet).length > 0);
    
    return (
        
            <div className="details">
                { planet ? 
                    <>
                        <div>
                            <h2>{ planet.name }</h2>
                            <p>Environment: <span className="environment">{ planet.environment}</span></p>
                            <p>Resources:</p>
                            <ul>
                                { 
                                    planet.resources.map( resource => (
                                        <li className="resource">{ resource }</li>
                                    )) 
                                }
                            </ul>
                        </div>
                        <p className="select-favourite">
                            <div className="control">
                                <input id="fav-check" type="checkbox" checked={isFavourite} onClick={(control) => {
                                    dispatch({type: 'SET_A_FAVOURITE', data: {id:selectedPlanet, checked: control.currentTarget.checked}})} 
                                }/>
                                <label for="fav-check">Favourite</label>
                            </div>
                        </p>
                    </>
                : <span></span>
                }
            </div>
        
    );
}

export default Details;