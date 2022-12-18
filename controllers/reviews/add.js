const { Review } = require("../../models");

const add = async (req, res) => {
  const result = await Review.create(req.body);
  res.status(201).json({
    staus: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
