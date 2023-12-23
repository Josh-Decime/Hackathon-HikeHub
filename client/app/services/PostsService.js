import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"




class PostsService {
    async createPost(postData) {
        const response = await api.post('api/posts', postData)
        console.log('📬 Post going through the API:', response.data)
        const newPost = new Post(response.data)
        console.log(newPost)
        AppState.posts.push(newPost)
    }
    async getPosts() {
        const response = await api.get('api/posts')
        console.log('getting posts from API:', response)
        const newPosts = response.data.map(post => new Post(post))
        AppState.posts = newPosts
        console.log('posts in the AppState:', AppState.posts)

    }

}

export const postsService = new PostsService()