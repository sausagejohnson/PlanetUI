import planets from '../reducers/planets.json';

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

export const set_selected_planet = () => {
    return {
        type: 'SET_SELECTED_PLANET'
    }
}

export const set_a_favourite = () => {
    return {
        type: 'SET_A_FAVOURITE'
    }
}

export const fetchData = (dispatch) => {
    return (dispatch) => {
        console.log('Start Fetch');
        dispatch(set_loading());
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log('Go data. Dispatching to store.');
            let j = json
            dispatch({ type: 'PUMP_FETCHED_DATA', 'dataValue': j[0].address.suite})
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