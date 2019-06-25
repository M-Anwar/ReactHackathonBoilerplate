export const types = {
    UPDATE_HOME: 'UPDATE_HOME',
    LOAD_HOME: 'LOAD_HOME'
};

export const actions = {
    updateHome: (message) => ({type: types.UPDATE_HOME, payload: message}),    
    loadHome: () => ({type: types.LOAD_HOME})
}

export const initialState = {
    message: "Loading..."    
};

export default function(state = initialState, action){
    switch (action.type){
        case types.UPDATE_HOME:
            return {...state, message: action.payload};       
        default:
            return state;
    }
}