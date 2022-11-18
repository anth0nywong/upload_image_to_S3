import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema
({
    StartDate: {
        Date,
        default: Date.now()
    },
    EndDate: {
        Date,
        default: Date.now()
    },
    Status: Number,
    Price: Number,
    Tax: Number,
    TotalPrice: Number,
    // RentalPeriod unit: (days)
    RentalPeriod: Number,
    SpecialReq: String,
    MemberMemberID:String,
    VehicleVehicleID:String,

    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated:{
        type: Date,
        default: Date.now()
    }
},
{
    collection: "application"
});

const Model = mongoose.model("Application", ApplicationSchema);

export default Model;