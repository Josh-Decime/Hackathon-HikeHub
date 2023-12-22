import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"




class PostsService {
    async createPost(postData) {
        const response = await api.post('api/posts', postData)
        console.log('📬 Post going through the API:', response.data)
    }

}

export const postsService = new PostsService()