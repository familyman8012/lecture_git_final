// redux (initialState, action, dispatch, reducer)
// node index.js

// 리덕스불러오기, 기본값설정, 리듀서만들기, 스토어에 기본값-리듀서담고, 실행시 어떻게 변할지 dispatch

const {createStore} = require('redux');

const initialState = {
    user : null,
    posts : [],
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN' : 
            return {
                ...prevState,
                user : action.data
            } 
        case 'LOG_OUT' :
            return {
                ...prevState,
                user : null
            }
        case 'ADD_POST' :
            return {
                ...prevState,
                posts : [...prevState.posts, action.data]
            }
        default :
            return prevState;
    }
}
const store = createStore(reducer, initialState);

// store.dispatch({
//     type : 'LOG_IN',
//     data : {
//         id : 1,
//         name : 'clash',
//         admin : true
//     }    
// })
// 크리에티브 액션으로 만들기.
const logIn = (data) => {
    return {
        type : 'LOG_IN',
        data
    }
}
// type, data 가 명칭이 바뀔 수도 있다.
// const ChangeCompA = (payload) => {
//     return{ // 액션
//         name: 'CHANGE_COMP_A',
//         payload
//     }
// }

const logOut = () => {
    return {
        type : 'LOG_OUT'
    }
}
const addPost = (data) => {
    return {
        type : 'ADD_POST',
        data
    }
}

store.dispatch(logIn({
    id : 1,
    name : 'clash',
    admin : true
}));
// store.dispatch(logOut());
store.dispatch(addPost({
    userId:1,
    id: 1,
    content : '첫번째 포스트입니다.'
}))

console.log('1', store.getState());