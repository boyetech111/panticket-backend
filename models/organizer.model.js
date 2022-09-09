import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const organzierSchema = new Schema({
    _id : {
        type: String,
        default : uuidv4,
    },
    name: {
        type:String,
        required:true,
    },

    description: {
        type:String,
    },
    phone: String,
    email: String,
    twitter: String,
    instagram: String,
    facebook: String,
    events:[
        {
            type:String,
            ref:'Events',
        },
    ],
});

const Organizer = mongoose.model('Organizer', organzierSchema);
export default Organizer;