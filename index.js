// ## Student Name: SAI KISHORE REDDY KONATHAM
// ## Student ID: 1226951585
// ## Date: AUG 19 2023

const { query } = require("express");
const httpServer = require("http");
const url = require("url");
const fs = require("fs");
//////////////////////////////////
//Create Server

const tempCourse = fs.readFileSync(`${__dirname}/data.txt`, "utf-8");

const server = httpServer.createServer(function (req, res) {
  // call back function

  const urlParameter = url.parse(req.url, true);
  console.log(urlParameter.query);
  console.log(urlParameter.pathname);
  console.log(urlParameter.query.id);
  if (urlParameter.query.id) {
    //if there is query parameter named id
    //Courses page
    res.writeHead(200, {
      // Everything ran successfully
      "content-type": "texthtml",
    });
    res.end(
      `We recived our first request from the client at resourse ${urlParameter.pathname.toLocaleLowerCase()} with query parameter ${
        urlParameter.query.id
      } ${tempCourse}`
    );
  } else {
    res.writeHead(404, {
      // server did not find what you are looking for
      "Content-type": "text/html",
    });
    res.end("resource not found");
  }
  // res.end(`We recived our first request from client`)

  //console.log(urlParameter.query);
});

//Start Listening to requests
server.listen(2000, "localhost", function () {
  console.log("listening to requests on port 2000");
});
