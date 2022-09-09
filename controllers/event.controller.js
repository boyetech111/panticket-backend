import Event from "../models/Event.model";

export async function createEvent(req, res) {
    try {
        const newEvent = await Event.create(req.body);
        return res.status(201).json({
        message: 'event created successfully',
        event: newEvent,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
        message: 'Issues processing your request',
    });
  }
}
export function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id, (err, event)=>{
   if(err) {
    console.log(err);
    return res.status(500).json({
      message: 'unable to delete event',
    });
   } else {
    return res.status(200).json({
      message: 'event deleted',
      event,
    });
   }
  })
}
export function updateEvent(req, res) {
  Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: 'after',
    },
    function(err, updated) {
      if (err) {
        return res.status(500).json({
          message: 'unable to update event',
        });
      } else {
        return res.status(200).json({
          message: 'event updated',
          event: updated,
        });
       }
    }
  );
}
export function fetchEvents(req, res) {
  Event.find({}, function (err, events) {
    if (err) {
      return res.status(500).json({
        message: 'unable to fetch events ',
      });
    } else {
      return res.status(200).json({
        message: 'events fetched',
        events,
      });
    }
  });
}

export function fetchEventById(req, res) {
  Event.findById( req.params.id, function(err, event) {
      if (err) {
        return res.status(500).json({
          message: 'unable to fetch by event',
        });
      } else {
        return res.status(200).json({
          message: 'event fetched',
          event,
        });
       }
    }
  );
}