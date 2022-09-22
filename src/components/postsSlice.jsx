import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    post:{},
}


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action) => {state.posts = action.payload},
        fetchPost: (state,action) => {state.post = action.payload},
        deletePost: (state,action) => {state.posts = state.posts.filter((post)=>post.id !== action.payload)},
        createPost: (state,action) => {state.posts.push(action.payload)},
        editPost: (state,action) => {state.posts = state.posts.map((post)=> {
            if (post.id === action.payload.id) return {id:post.id, ...action.payload}
            return post
        })}

    }
})

const {actions,reducer} = postsSlice;

export default reducer;

export const {fetchPosts,fetchPost,deletePost,createPost,editPost} = actions;