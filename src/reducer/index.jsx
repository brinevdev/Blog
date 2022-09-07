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
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter((post)=>post.id !== payload)
            }
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts,payload]
            }
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.post.map((post)=> {
                    if (post.id === payload.id) return {id:post.id, ...payload}
                    return
                })
            }
        default:
            return state;
    }
}

export default reducer;