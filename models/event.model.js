import { string } from "joi";
import  mongoose,{ Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const eventSchema = new Schema({
    _id : {
        type: String,
        default : uuidv4,
    },
    name: {
        type:String,
        required:true,
    },
    location:{
        type:String,
    },
    price:{
        type:Number,
    },
    date:{
        type:Date,
    },
    time:{
        type:String,
    },
    isFeatured:{
        type:Boolean,
    },
    description: {
        type:String,
    },
    tickets: [
        {
          type:String,
          ref:'Ticket'  
        },
    ],
    ticketTypes: [
        {
          type:String,
          ref:'Ticket'  
        },
    ],
    organzier: {
        type:String,
        ref: 'Organizer',
    },
    category: {
        type: String,
        ref: 'Category',
    },
})

const Event = mongoose.model('Event', eventSchema);
export default Event;