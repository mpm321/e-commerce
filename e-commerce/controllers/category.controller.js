const Category = require("../models/category.model.js");

// Create and Save a new Category
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const category = new Category({
    name: req.body.name,
    parent_id: req.body.parent_id || null
  });

  Category.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Category."
      });
    else res.send(data);
  });
};

// Retrieve categories by parent ID
exports.findByParentId = (req, res) => {
  Category.getByParentId(req.params.parentId, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};
