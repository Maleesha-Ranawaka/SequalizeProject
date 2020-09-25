const { CityList } = require('../models/index');

exports.create = async (req, res) => {
  try {
    const citylist1 = await CityList.create(req.body);
    return res.status(201).json({
      citylist1,
    });
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

exports.getAllCities = async (req, res) => {
  try {
    const citylist2 = await CityList.findAll();
    return res.status(201).json({
      citylist2,
    });
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
}