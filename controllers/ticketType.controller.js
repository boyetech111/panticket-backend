import ticketType from "../models/ticketType.model";


export async function createTicketType(req, res) {
    try {
        const newticketType = await ticketType.create(req.body);
        return res.status(201).json({
        message: 'ticketType created successfully',
        ticketType: newticketType,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
        message: 'Issues processing your request',
    });
  }
}
export function deleteticketType(req, res) {
  ticketType.findByIdAndDelete(req.params.id, (err, ticket) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues deleting ticket type',
      });
    }

    return res.status(200).json({
      message: 'ticket type deleted successfully',
      ticket,
    });
  });
}
export function  updateticketType(req, res) {
  ticketType.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after' },
    (err, ticket) => {
      if (err) {
        return res.status(500).json({
          message: 'issues updating ticket type',
        });
      }
      return res.status(200).json({
        message: 'ticket type updated successfully',
        ticket,
      });
    }
  );
}
export function  fetchticketType(req, res) {
  ticketType.find({}, (err, tickettypes) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues fetching ticket type',
      });
    }
    return res.status(200).json({
      message: 'ticket type fetched successfully',
      tickettypes,
    });
  });
}

export function fetchTicketTypeById(req, res) {
  ticketType.findById(req.params.id, (err, tickettype) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues fetching ticket type',
      });
    }

    return res.status(200).json({
      message: 'ticket type fetched successfully',
      tickettype,
    });
  });
}