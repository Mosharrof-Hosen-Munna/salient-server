const {model, Schema} = require('mongoose')

// profile schema
const profileSchema = new Schema({
    fullName: {
        type: String,
        maxlength: 30,
        trim: true,
    },
    bio: {
        type:String,
        maxlength: 500,
        trim:true,
    },
    profilePic: {
        type: String,
    },
    contactInfo: {
        phone: Number,
        email: String,
        address: String,
    },
    ads: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ads'
        }
    ],
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref:'Blog'
        }
    ],
    Orders:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order'
        }
    ],
    Bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ads'
        }
    ],
    Package: {
        type:Schema.Types.ObjectId,
        ref: 'Package'
    },

},{timestamps:true})

const Profile = model('Profile',profileSchema)

module.exports = Profile