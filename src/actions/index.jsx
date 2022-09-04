
export const fetchPosts = (posts) => {
    return {
        type:'FETCH_POSTS',
        payload:posts
        }
}

export const fetchPost = (post) => {
    return {
        type: 'FETCH_POST',
        payload:post
    }
} 

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        payload:id
    }
}