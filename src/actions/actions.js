import local_planets_data from '../reducers/planets.json';


export const populate_store_with_data = (data) => {
    return {
        type: 'LOAD_PLANETS_INTO_STORE',
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
            dispatch( populate_store_with_data(json) )
        }).then( () => {
            dispatch(set_loaded());
        });
    }
    
}

export const fetchLocalPlanetData = (dispatch) => {
    return (dispatch) => {
        dispatch(set_loading());
        setTimeout(() => {
            dispatch( populate_store_with_data(local_planets_data) );
            dispatch(set_loaded());
        }, 2000);
    }
    
}