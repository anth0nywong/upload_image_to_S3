import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NotificationSchema = new Schema
({
    Message: String,
    Status: String,
    RentalApplicationRentalID: String,
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
    collection: "notification"
});

const Model = mongoose.model("Notification", NotificationSchema);

export default Model;