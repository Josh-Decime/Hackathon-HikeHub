


// Auth middleware?? I think I did this
// TODO Create Posts - don't forget to attach the user
// TODO Update post
// TODO Delete post

import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getPosts)
            .get('', this.getPostById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .delete('/:postId', this.deletePost)
            // .put updatepost
            .post('', this.createPost)
    }
    async getPosts(request, response, next) {
        try {
            const posts = await postsService.getPosts()
            response.send(posts)
        } catch (error) {
            next(error)
        }
    }

    async getPostById(request, response, next) {
        try {
            const postId = request.params.postId
            const post = await postsService.getPostById(postId)
            response.send(post)
        } catch (error) {
            next(error)
        }
    }

    async createPost(request, response, next) {
        try {
            const postData = request.body
            const userInfo = request.userInfo
            postData.authorId = userInfo.id
            const post = await postsService.createPost(postData)
            response.send(post)
        } catch (error) {
            next(error)
        }
    }

    async deletePost(request, response, next) {
        try {
            const postId = request.params.postId
            const message = await postsService.deletePost(postId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }

    async updatePost(request, response, next) {
        try {

        } catch (error) {

        }
    }
}