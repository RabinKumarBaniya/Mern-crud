const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
    .connect("mongodb+srv://robin:cE0UJLHQYUYj2UEK@cluster0.vv7lgal.mongodb.net/myDB?retryWrites=true&w=majority")
    .catch((err) => console.log(err));

// schema
const postSchema = mongoose.Schema({
    title: String,
    description: String,
})

//model
const Post = mongoose.model("Post", postSchema);



app.post("/create", (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
    }).then(doc => console.log(doc))
        .catch(err => console.log(err));
});

app.get("/posts", (req, res) => {
    Post.find()
        .then(items => res.json(items))
        .catch(err => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
            description: req.body.description,
        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

app.listen(3001, function () {
    console.log("Server is running");
})
