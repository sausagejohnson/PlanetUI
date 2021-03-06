const initialState = {
    loading: false,
    planets: [],
    selectedPlanet: null,
    favourites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PLANETS_INTO_STORE':
            return { ...state, planets: action.data }
        case 'SET_LOADING':
            return { ...state, loading: true }
        case 'SET_LOADED':
            return { ...state, loading: false }
        case 'SET_SELECTED_PLANET':
            return { ...state, selectedPlanet: action.id }
        case 'SET_A_FAVOURITE':
            if (action.data.checked){ //add a favourite
                return { 
                    ...state, favourites: [...state.favourites, action.data.id] 
                }
            } else { //remove a favourite
                return {
                    ...state, favourites: [ ...state.favourites.filter(ids => ids !== action.data.id) ]
                }
            }
        default:
            return state
    }
}

export default reducer;