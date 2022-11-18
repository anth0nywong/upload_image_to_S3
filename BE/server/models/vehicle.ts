import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VehicleSchema = new Schema
({
    VehicleType: String,
    BrandName: String,
    Model: String,
    Year: Number,
    Description: String,
    Image: String,
    Status: Number,
    RentPrice: Number,
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
    collection: "vehicle"
});

const Model = mongoose.model("Vehicle", VehicleSchema);

export default Model;