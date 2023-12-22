export class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.authorId = data.authorId
        this.author = data.author
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }
}