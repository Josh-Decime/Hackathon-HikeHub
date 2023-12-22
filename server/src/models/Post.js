import { Schema } from "mongoose"


export const PostSchema = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 50 },
    imgUrl: { type: String, required: true, maxLength: 500, validate: _validUrl },
    description: { type: String, maxLength: 1000, default: '' },
    emoji: { type: String, enum: ['🌲', '🌄', '🏜', '🌅', '⛱'] },
    authorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

function _validUrl(url) {
    return /http:\/\/|https:\/\//.test(url)
    // I forgot how this works exactly but i think it works
}
PostSchema.virtual('author',
    {
        localField: 'authorId',
        foreignField: '_id',
        ref: 'Account',
        justOne: true
    })
