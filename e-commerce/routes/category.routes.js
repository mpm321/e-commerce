module.exports = app => {
  const categories = require("../controllers/category.controller.js");

  // Create a new Category
  app.post("/categories", categories.create);

  // Retrieve Categories by Parent ID
  app.get("/categories/:parentId", categories.findByParentId);
};
