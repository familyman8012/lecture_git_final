const {createStore} = require('redux');

const initialState = {
    compA : 'a',
    compB : 12,
    compC : null,
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'CHANGE_COMP_A' : 
            return {
                compA : action.data,
                compB : 12,
                compC : null,
            }
        case 'CHANGE_COMP_B' :
            return {
                compA : 'b',
                compB : action.data,
                compC : null,
            }        
        default:
            return prevState;
    }
};


const store = createStore(reducer, initialState);

store.dispatch({
    type : 'CHANGE_COMP_A',
    data : 'b'
})

console.log('2nd', store.getState());
