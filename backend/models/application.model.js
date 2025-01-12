import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    //for applicants
    job:{
        type: mongoose.Schema.Types.ObjectId,  //id of company in which applicant(user) has applied
        ref: 'Job',
        required: true,
    },
    applicant:{
        type: mongoose.Schema.Types.ObjectId, // applicant is user
        ref: 'User',
        required: true,
    },
    status:{
        type: String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    },
},{timestamps:true});

export const Application = mongoose.model("Application", applicationSchema);