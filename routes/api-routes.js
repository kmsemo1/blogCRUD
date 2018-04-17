// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Post.findAll({}).then(function (result) {
      res.json(result);
    })
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function (req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (result) {
      // return the result to the user with res.json
      res.json(result);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      // return the result to the user with res.json
      res.json(result);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function (result) {
      // then return the result using res.json
      res.json(result);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      // then return the result to the user using res.json
      res.json(result);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (result) {
        // req.body.id and return the result to the user using res.json
        res.json(result);
      });
  });
};
