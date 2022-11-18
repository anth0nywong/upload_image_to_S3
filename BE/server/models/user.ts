// Step 1 -import Mongoose - Database adapter
import mongoose, { PassportLocalSchema, PassportLocalModel} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';
// Step 2 - Create a schema that matches the data in collection
const UserSchema = new Schema
({
    FirstName: String,
    LastName: String,
    EmailAddress: String,
    MemberType: String,
    Mobile: String,
    DisplayName: String,
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
    collection: "user"
});

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}

// Step 3 - plugin the passport local strategy
UserSchema.plugin(passportLocalMongoose);

// Step 3- Create a Model using the Schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
//const Model = mongoose.model("User", UserSchema) as PassportLocalModel;
// Step 4 - Export the Model -> converts this file into a module
export default Model;