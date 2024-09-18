const http = require("http");


const server = http.createServer(
    (req , res) => {}
);


server.listen(1212, () => {
    console.log("Server is Start Listning at 1212....")
});
