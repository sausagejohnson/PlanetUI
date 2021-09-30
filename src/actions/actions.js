import planets from '../reducers/planets.json';


export const populate_store_from_remote_data = (data) => {
    return {
        type: 'PUMP_FETCHED_DATA',
        data: data
    }
}


export const set_loading = () => {
    return {
        type: 'SET_LOADING'
    }
}

export const set_loaded = () => {
    return {
        type: 'SET_LOADED'
    }
}

export const set_selected_planet = (id) => {
    return {
        type: 'SET_SELECTED_PLANET',
        id: id
    }
}

export const set_a_favourite = (data) => {
    return {
        type: 'SET_A_FAVOURITE',
        data: data
    }
}

export const fetchRemoteData = (dispatch) => {
    return (dispatch) => {
        dispatch(set_loading());
        return fetch('https://waynejohnson.net/planets', 
        { 
            mode: 'cors', 
            method: 'GET', 
            headers: { 
                'Content-Type': 'text/plain',
                'Accept': 'application/json'
            } 
        })
        .then(response => response.json())
        .then(json => {
            dispatch( populate_store_from_remote_data(json) )
        }).then( () => {
            dispatch(set_loaded());
        });
    }
    
}

export const fetchLocalPlanetData = (dispatch) => {
    return (dispatch) => {
        console.log('Fetch PLANETS');
        dispatch(set_loading());
        setTimeout(() => {
            dispatch({ type: 'STUFF_PLANETS_IN_STORE', 'data': planets});
            dispatch(set_loaded());
        }, 2000);
    }
    
}