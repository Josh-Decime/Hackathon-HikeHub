export class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.authorId = data.authorId
        this.author = data.author
        this.popularity = data.popularity
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }

    get PostTemplate() {
        return `
        <div class="foreground-orange rounded mt-3">
            <p class="fs-3 px-3 my-0">${this.title}</p>
            <p class="px-3">${this.description}</p>
            <img class="img-container" src="${this.imgUrl}" alt="Picture of ${this.title}">
            <div class="d-flex justify-content-between">
                <button type="button" class="btn wood-brown light-text m-2" data-bs-toggle="modal"
                    data-bs-target="#commentModal" id="${this.id}">
                    Comments
                </button>
                <div class="">
                    <span class="btn"><i class="mdi mdi-arrow-up-bold-box fs-1"></i></span>
                    <span class="btn"><i class="mdi mdi-arrow-down-bold-box fs-1"></i></span>
                </div>
            </div>
        </div>
        `
    }
}