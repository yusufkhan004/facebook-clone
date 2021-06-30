// atstart user is not logged in thatswhy user is null
export const initialState = {
    user: null,
};

// dispatching the action into the data Layer
export const actionTypes = {
    SET_USER : "SET_USER",
};

// inside the reducer we listen to it 
// for e.g. if an action is received from SET_USER action then 
// return layer that currently looklike but change the user to 
// whatever we passed in as user payload inside the action that we dipatched
export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            // if we didnt listen to the action we can return state
        default:
            return state;
    }
};

export default reducer;