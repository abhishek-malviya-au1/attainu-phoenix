'use strict';

// All external libraries
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var session = require("express-session");

// Create the express application
var app = express();

// Use handlebars
app.set("view engine", "hbs");

// Static folder
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({extended: false}));

// Use session
app.use(session({
    secret: "secret-key"
}));

// The DB stuff
var DB;

var mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/blog', {useNewUrlParser: true});
mongoClient.connect(function(err) {
    if(err) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("Connection to MongoDB database blog established");
    }
    DB = mongoClient.db("blog");
});


app.get("/", function(request, response) {

    // Check if the user is logged in or not
    if(request.session.user) {

        // If the user is logged in, redirect her to home page
        response.redirect("/home");
    } else {

        // If the user is not logged in, redirect her to login page
        response.redirect("/login");
    }

});


// // List all the blog posts
app.get("/home", function(request, response){

    if(!request.session.user) { return response.redirect("/login"); }


    DB.collection("posts").find({ createdBy: request.session.user._id }).toArray(function(error, allPosts){
        if(error) {
            response.send("Error fetching blog posts");
        } else {
            var data = {
                allPosts: allPosts,
                loggedInUser: request.session.user
            };
            response.render("index.hbs", data);
        }
    });
});


// Show add post form
app.get("/add", function(request, response) {
    if(!request.session.user) { return response.redirect("/login"); }


    var data = {
        loggedInUser: request.session.user
    };

    if(request.query.success) {
        data.postAdded = true;
    }

    response.render("add.hbs", data);
});


// Create a new post
app.post("/add", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }


    var data = {
        title: request.body.title,
        content: request.body.content,
        createdBy: request.session.user._id
    };

    // Insert the data in the DB.
    DB.collection("posts").insertOne(data, function(error, result) {

        if(error) {
            response.send("Error creating your blog post");
            return;
        } else {
            response.redirect("/add?success=true");
        }

    });

});


// Show edit form
app.get("/edit/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }

    var mongoId = request.params.mongoId;
    var editSuccess = request.query.success;

    DB.collection("posts").findOne({_id: mongodb.ObjectID(mongoId) }, function(error, data){
        if(error) {
            response.send("Error: Not found");
            return;
        }

        if(data.createdBy != request.session.user._id) {
            return response.send("oh no! you are not allowed view this");
        }

        data.loggedInUser = request.session.user;

        if(editSuccess) {
            data.success = true;
        }

        response.render("edit.hbs", data);

    });

});


// Update a blog post
app.post("/edit/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }

    var mongoId = request.params.mongoId;

    var newTitle = request.body.title;
    var newContent = request.body.content;

    DB.collection("posts").updateOne(
        {_id: mongodb.ObjectID(mongoId)},   // Filter an unique object
        {$set: {title: newTitle, content: newContent} }, // The new data to update
        function(error, data) { // The callback after update is done

           response.redirect("/edit/" + mongoId + "?success=true");

    });

});


// Deletes a post via JSON/AJAX
app.post("/delete/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }

    var mongoId = request.params.mongoId;
    
    DB.collection("posts").deleteOne(
        {_id: mongodb.ObjectID(mongoId)},
        function(error, status) {
            response.json({deleted: true});
    });

});


// All authentication related code

app.get("/login", function(request, response) {
    response.render("login.hbs");
});

app.post("/login", function(request, response) {
    var user = {
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").findOne(user, function(error, user) {

        if(error || !user) {
            response.render("invalid-login.hbs");
            return;
        }

        request.session.user = user;
        response.redirect("/home");

    });
});

app.get("/signup", function(request, response) {
    response.render("signup.hbs");
});

app.post("/signup", function(request, response) {
    
    var newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").insertOne(newUser, function(error, data) {
        response.redirect("/login");
    });
});

app.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});



app.listen(3000);