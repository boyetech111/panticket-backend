import Organizer from "../models/organizer.model";

export async function createOrganizer(req, res) {
    try {
        const newOrganizer = await Organizer.create(req.body);
        return res.status(201).json({
        message: 'Organizer created successfully',
        organizer: newOrganizer,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
        message: 'Issues processing your request',
    });
  }
}
export function deleteOrganizer(req, res) {
 Organizer.findByIdAndDelete(req.params.id, (err, organizer) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues deleting organizer type',
      });
    }

    return res.status(200).json({
      message: 'organzier type deleted successfully',
      organizer,
    });
  });
}
export function updateOrganizer(req, res) {
  Organizer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after' },
    (err, organizer) => {
      if (err) {
        return res.status(500).json({
          message: 'issues updating organizer type',
        });
      }
      return res.status(200).json({
        message: 'organizer type updated successfully',
        organizer,
      });
    }
  );
}
export function fetchOrganizer(req, res) {
  Organizer.find({}, (err, organizer) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues fetching organizer type',
      });
    }
    return res.status(200).json({
      message: 'organizer type fetched successfully',
      organizer,
    });
  });
}
export function fetchOrganizerById(req, res) {
  Organizer.findById(req.params.id, (err, organizer) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: 'issues fetching organizer type',
      });
    }
    return res.status(200).json({
      message: 'organizer type fetched successfully',
      organizer,
    });
  });
}