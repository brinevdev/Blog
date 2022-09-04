const initialState = {
    posts:[],
}

function reducer(state = initialState,{type,payload}) {
    switch (type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts:payload
            }
        default:
            return state;
    }
}

export default reducer;