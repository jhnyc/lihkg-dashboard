const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 3100;

// read and set aws credentials
const dotenv = require("dotenv");
dotenv.config();

// load aws sdk
const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-east-1" }); // set region

// create s3 object
const s3 = new AWS.S3();

// bucket and file name
BUCKET_NAME = "lihkg-dashboard";
OUTPUT_DIR = "Output";

// list all buckets
s3.listBuckets(function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// browsers will by default try to request favicon.ico everytime, hence catch the request as invalid request
app.get("/favicon.ico", (req, res) => {
    res.send("Invalid request.", 404);
});

// dynamic route for retrieving different json documents from s3
app.get("/:id", (req, res) => {
    var file = `${OUTPUT_DIR}/${req.params.id}.json`;
    const objectParams = {
        Bucket: BUCKET_NAME,
        Key: file,
    };
    s3.getObject(objectParams, function(err, data) {
        if (err) res.send("Invalid request.", 404); // an error occurred
        else res.send(JSON.parse(data.Body.toString("utf-8"))); // successful response
    });
});

app.get("*", function(req, res) {
    res.send("Invalid request.", 404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});