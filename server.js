import express from 'express';
import {homeController} from './controllers/home.controller';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { 
    createEvent,  
    deleteEvent, 
    updateEvent, 
    fetchEvents,
    fetchEventById
} from './controllers/event.controller';
import { validateEventData } from './controllers/middleware/event.vaildator';
import { validateOrganizerData, validateOrganizerUpdateData } from './controllers/middleware/organizer.validator';
import { createOrganizer, deleteOrganizer, fetchOrganizer, fetchOrganizerById, updateOrganizer } from './controllers/organizer.controller';
import { validateCategoryData } from './controllers/middleware/category.validate';
import { createCategory, deleteCategory, fetchCategory, fetchCategoryById, updateCategory } from './controllers/category.controller';
import { validateTicketTypeData, validateTicketTypeUpdateData } from './controllers/middleware/ticketType.validate';
import { createTicketType, deleteticketType, fetchticketType, fetchTicketTypeById, updateticketType } from './controllers/ticketType.controller';
dotenv.config()

// const db = mongoose.createConnection(process.env.DEV_DB);
// db.on('connected', () => {
//     console.log('connection successful');
// })

// db.on('error', (err) => {
//     console.log('connection failed', err.message);
// })

const connectToDB = () => mongoose.connect(process.env.DEV_DB);

connectToDB()
    .then(() => console.log('connected'))
    .catch((err) => console.log(err.message))

const server = express();
server.use(express.json());
server.use(
    express.urlencoded({
        extended: true,
    })
)
const port = 4002; 

// Add code  to make our server be able to read json form and url encoded form
server.use(express.json());
server.use(express.urlencoded({ extended:true}));

server.get('/', homeController);


// events route
server.get('/event', fetchEvents)
server.post('/event', validateEventData, createEvent);
server.get('/event/:id', fetchEventById);
server.put('/event/:id', updateEvent);
server.delete('/event/:id', deleteEvent);

// category route
server.get('/category', fetchCategory)
server.post('/category', validateCategoryData, createCategory);
server.get('/category/:id', fetchCategoryById);
server.put('/category/:id', updateCategory);
server.delete('/category/:id', deleteCategory);


// tickettype route
server.get('/tickettype', fetchticketType);
server.post('/tickettype', validateTicketTypeData, createTicketType);
server.get('/tickettype/:id', fetchTicketTypeById);
server.put('/tickettype/:id', validateTicketTypeUpdateData, updateticketType);
server.delete('/tickettype:id', deleteticketType);


// organizer route
server.get('/organizer', fetchOrganizer);
server.post('/organizer', validateOrganizerData, createOrganizer);
server.get('/organizer/:id', fetchOrganizerById);
server.put('/organizer/:id', validateOrganizerUpdateData, updateOrganizer);
server.delete('/organizer/:id', deleteOrganizer);




server.listen(port, () =>{
    console.log('server started and running on port' + port )
}); 