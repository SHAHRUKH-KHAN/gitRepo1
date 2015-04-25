var http = require("http"); 
var fs = require("fs");

fs.readFile('./loginPage.html', function (err, html) 
{
    if (err) throw err; 

    http.createServer(function (request,response)
    {  
        // serve site
        if (request.url === "/")
        {
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
        }
        response.end(); 
    }).listen(8080); 
	console.log("Server listening");
});