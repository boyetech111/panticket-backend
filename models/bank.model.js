import { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const bankSchema = new Schema({
    _id : {
        type: String,
        default : uuidv4,
    },
    bankName:{
        type: String,
    },
    number:{
        type: Number,
    },
    accountName:{
        type:String,
    },
    
})

const Bank = mongoose.model('Bank', bankSchema);
export default Bank;