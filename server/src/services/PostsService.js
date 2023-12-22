
import { dbContext } from "../db/DbContext.js";

class PostsService {

    async getPostById(postId) {
        const post = await dbContext.Posts.findById(postId).populate('author', '-email')
        if (!post) {
            throw new Error('No Post at id: ${postId}')
        }
        return post
    }
    async getPosts() {
        const posts = await dbContext.Posts.find().populate('author', '-email')
        return posts
    }

    async createPost(postData) {
        const post = await dbContext.Posts.create(postData)
        await post.populate('author', '-email')
        return post
    }

}

export const postsService = new PostsService()