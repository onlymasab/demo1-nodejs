const http = require("http");


const server = http.createServer(
 (req, res)   => {
    switch(req.url) {
        case "/": res.end("Hello I'm your server")
            break;
        case "/about": res.end("Your are Shabana")
            break;
        default: res.end("Page is not found 404")
    }
 }
)

server.listen(4545, () => console.log("Server is Listning...."))