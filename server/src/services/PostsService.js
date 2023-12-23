
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

    async deletePost(postId) {
        const postToDelete = await dbContext.Posts.findById(postId)
        if (!postToDelete) { //verifies were deleting a post that does exist in the database, and the id isn't bad
            throw new Error('WOAAAAAH you screwed up no post id ${postId}')
        }
        await postToDelete.remove() //if we didn't hit the error then we do have a post and can tell the post to remove itself
        return `${postToDelete} was deleted.`
    }

}

export const postsService = new PostsService()