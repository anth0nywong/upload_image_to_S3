import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RatingSchema = new Schema
({
    Rating: Number,
    RatedFrom: String,
    MemberMemberID: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated:{
        type:Date,
        default: Date.now()
    }
},
{
    collection: "rating"
});

const Model = mongoose.model("Rating", RatingSchema);

export default Model;