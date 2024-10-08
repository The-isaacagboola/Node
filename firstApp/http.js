const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

/*
server.on('connection',(socket)=>{
    console.log('New connection..');

})
    we wouldnt do this in actual live production
    */
server.listen(3000);

console.log("Listening on PORT 3000...");
