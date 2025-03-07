const travellerService = require('../services/traveller');

exports.createTraveller = async (req, res) => {
  try {
    const traveller = await travellerService.createTraveller(req.body);
    res.status(201).json(traveller);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTravellers = async (req, res) => {
  try {
    const travellers = await travellerService.getAllTravellers();
    res.status(200).json(travellers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
