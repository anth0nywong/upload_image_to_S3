import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new Schema
({
    
    MemberMemberID: String,
    DirectChatChatID: String,
    MessageContent: String,
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
    collection: "message"
});

const Model = mongoose.model("Message", MessageSchema);

export default Model;