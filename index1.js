// //const { query } = require('express');
// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const replaceTemplate = require('./Template/replaceTemplate')

// /////Read Data from file 
// //// Template
// const tempCourse = fs.readFileSync(
//     `${__dirname}/data/data.json`,
//     'utf-8'

// );

// ///////////////////////
// // Template

// //const replaceTemplate = (htmlStr, course) => { //fat arrow or lamda function  
//     //let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
//     //output = outout.replace(/{%IMAGE%}/g, course.image);
//     //output = outout.replace(/{%FROM%}/g, course.from);
//     //output = outout.replace(/{%INSTRUCTOR%}/g, course.instructor);
//     //output = outout.replace(/{%CREDITS%}/g, course.credits);
//     //output = outout.replace(/{%DESCRIPTION%}/g, course.descrption);
//     //output = outout.replace(/{%ID%}/g, course.id);
//     //return output;

// //}

// const dataObj = JSON.parse(tempCourse);
// const server = http.createServer( (req, res) => { // call back function 

//     const urlParameter = url.parse(req.url, true);
//     console.log(urlParameter.query);
//     console.log(urlParameter.pathname);
//     const {query, pathname} = url.parse(req.url, true);//obj destructor

//     if (query.id) { // if there is a query parameter named id
//         // Courses page
//         if(pathname === '/' || pathname.toLowerCase()=='/courses'){
//         res.writeHead(200, { // Everything ran successfully
//             'content-type': 'text/html'
//         });
//         const course = dataObj[Number(query.id)];
//         const strCourseName = JSON.stringify(course);
//         const courseHTML = replaceTemplate(replaceTemplate, course);
//         //res.end(`We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
//          //${JSON.stringify(course)}
//         // `)
//         res.end(courseHTML);
//     }
// }
//     else {
//         res.writeHead(404, { // server did not find what you are looking for 
//             'Content-type': 'text/html'
//         });
//         res.end('Resource not found')
//     }
// });

// // Start Listening to requests
// server.listen(2000, 'localhost', function () {
//     console.log('Listening to requests on port 2000');
// });


// //const { query } = require('express');
// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// /////Read Data from file 
// //// Template
// const tempCourse = fs.readFileSync(
//     `${__dirname}/data/data.json`,
//     'utf-8'

// );

// const dataObj = JSON.parse(tempCourse);
// const server = http.createServer(function (req, res) { // call back function 

//     const urlParameter = url.parse(req.url, true);
//     console.log(urlParameter.query);
//     console.log(urlParameter.pathname);

//     if (urlParameter.query && urlParameter.query.id) { // if there is a query parameter named id
//         // Courses page
//         res.writeHead(200, { // Everything ran successfully
//             'content-type': 'text/html'
//         });
//         const course = dataObj[urlParameter.query.id].JSON;
//         res.end(`We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
//          ${course}
//          `)
//     }
//     else {
//         res.writeHead(404, { // server did not find what you are looking for 
//             'Content-type': 'text/html'
//         });
//         res.end('Resource not found')
//     }
// });

// // Start Listening to requests
// server.listen(2000, 'localhost', function () {
//     console.log('Listening to requests on port 2000');
// });

//const { query } = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');

/////Read Data from file 
//// Template
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'

);

const dataObj = JSON.parse(tempCourse);
const server = http.createServer(function (req, res) { // call back function 

    const urlParameter = url.parse(req.url, true);
    console.log(urlParameter.query);
    console.log(urlParameter.pathname);

    if (urlParameter.query && urlParameter.query.id) { // if there is a query parameter named id
        // Courses page
        res.writeHead(200, { // Everything ran successfully
            'content-type': 'text/html'
        });
        const course = dataObj[Number(urlParameter.query.id)];
        res.end(`We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
         ${JSON.stringify(course)}
         `)
    }
    else {
        res.writeHead(404, { // server did not find what you are looking for 
            'Content-type': 'text/html'
        });
        res.end('Resource not found')
    }
});

// Start Listening to requests
server.listen(2000, 'localhost', function () {
    console.log('Listening to requests on port 2000');
});
