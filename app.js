var http = require("http");
var ERPNext =require("./ERP.js");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Welcome to LogsNX Push Api Server\n');

}).listen(8081);
var option={
    username:"farhan.seit@gmail.com",
    password:"Farhan@13579",
    baseUrl:"https://hammelalteeb.blimey.store"
};
var eRPNext =new ERPNext(option);
eRPNext.login();
//console.log("Customers data :");
eRPNext.getCustomersName();

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
console.log('Authentication successful');