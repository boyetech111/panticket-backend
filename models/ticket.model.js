import { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const ticketSchema = new Schema({
    _id : {
        type: String,
        default : uuidv4,
    },
    issuer:String,
    vendor:String,
    price:{
        type:Number,
        default:0,
    },
    status: {
        String,
    },
    issuedDate: Date,
    email: {
        type:String,
    },
    event:{
        type: String,
        ref: 'Events',
    },
    
})

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;