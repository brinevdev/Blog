
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