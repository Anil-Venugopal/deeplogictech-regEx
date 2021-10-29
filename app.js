const http = require("http");
const Todo = require("./controller");


const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    // /api/getTimeStories : GET
    if (req.url === "/api/getTimeStories" && req.method === "GET") {
        // get all the Latest Stories.
        const getTimeStories = await new Todo().getTodos();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(getTimeStories));
    }

    // /api/todos/:id : GET
    else if (req.url.match(/\/api\/getTimeStories\/([0-9]+)/) && req.method === "GET") {
        try {
            // get id from url
            const title = req.url.split("/")[3];
            // get a single Latest Story
            const getTimeStory = await new Todo().getTodo(title);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the data
            res.end(JSON.stringify(getTimeStory));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }
    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
