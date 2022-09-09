import { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const userSchema = new Schema({
    _id : {
        type: String,
        default : uuidv4,
    },
    name:{
        type: String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
})

const User = mongoose.model('User', userSchema);
export default User;