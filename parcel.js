const parcelService = require('../services/parcel');

exports.createParcel = async (req, res) => {
  try {
    const parcel = await parcelService.createParcel(req.body);
    res.status(201).json(parcel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findMatch = async (req, res) => {
  try {
    const matches = await parcelService.findMatchingTravellers(req.query);
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllParcels = async (req, res) => {
    try {
      const parcels = await parcelService.getAllParcels();
      res.status(200).json(parcels);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  