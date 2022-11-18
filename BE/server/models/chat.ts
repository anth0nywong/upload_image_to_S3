import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChatSchema = new Schema
({
    
    MemberMemberID: [String],
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
    collection: "chat"
});

const Model = mongoose.model("Chat", ChatSchema);

export default Model;