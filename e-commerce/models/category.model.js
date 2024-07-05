const sql = require("./db.js");

// Constructor
const Category = function(category) {
  this.name = category.name;
  this.parent_id = category.parent_id;
};

// Create new category
Category.create = (newCategory, result) => {
  sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newCategory });
  });
};

// Get categories by parent ID
Category.getByParentId = (parentId, result) => {
  sql.query("SELECT * FROM categories WHERE parent_id = ?", [parentId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Category;
