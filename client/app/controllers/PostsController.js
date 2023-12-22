import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPosts() {
    const posts = AppState.posts
    let postContent = ''
    posts.forEach(post => postContent += post.PostTemplate)
    setHTML('post-placement', postContent)
}

export class PostsController {
    constructor() {
        console.log('📬post controller online')
        _drawPosts()
    }

    // async getPosts(){
    //     try {

    //     } catch (error) {

    //     }
    // }

}