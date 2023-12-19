const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const retrieveStartups = asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const filters = req.body;
  let filtarr = {};
  filters.forEach((filter) => {
    if (filter.options.length !== 0) {
      filtarr[filter.name] = { $in: filter.options };
    }
  });
  const pageSize = parseInt(process.env.PAGE_SIZE);
  const skip = pageSize * (page - 1);
  try {
    const arr = await mongoose.connection.db
      .collection("startup_funding")
      .find(filtarr)
      .skip(skip)
      .limit(pageSize)
      .toArray();
    res.status(200).json(arr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const newStartup = asyncHandler(async (req, res) => {
  const startup = req.body;
  try {
    if (!startup) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const result = await mongoose.connection.db
      .collection("startup_funding")
      .insertOne(startup);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

const uniqueFilters = asyncHandler(async (req, res) => {
  const filter = req.query.filter || "City";
  try {
    const arr = await mongoose.connection.db
      .collection("startup_funding")
      .distinct(filter);
    res.status(200).json(arr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = { retrieveStartups, newStartup, uniqueFilters };
