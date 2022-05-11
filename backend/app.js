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
BUCKET_NAME = "lihkg-test";
FILENAME = "test.json";

// read json object from s3

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

app.get("/awstest", (req, res) => {
    const objectParams = {
        Bucket: BUCKET_NAME,
        Key: "posts_by_weekday_hour.json",
    };
    s3.getObject(objectParams, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else res.send(JSON.parse(data.Body.toString("utf-8"))); // successful response
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});