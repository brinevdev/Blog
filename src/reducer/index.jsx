const initialState = {
    posts:[],
    post:{},
}

function reducer(state = initialState,{type,payload}) {
    switch (type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts:payload
            }
        case 'FETCH_POST':
            return {
                ...state,
                post:payload
            }
        default:
            return state;
    }
}

export default reducer;