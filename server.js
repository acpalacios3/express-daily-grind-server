// Import the express library.
import express from 'express';
// Import the built-in path module, which will help you create correct file paths.

// Create an instance of an Express application.
const app = express();
// Define a port to run the server on (e.g., 3000).
 const port = 3000;

app.use(express.static('./public'));

// Create a route handler for GET requests to the root URL (/). 
// When this route is requested, it should send the index.
// html file from your public directory.
app.get("/", (req, res) => {
res.send("Request to index")
});

// Create another route handler for GET requests to /contact. 
// This should send the contact.html file.

app.get("/contact", (req, res) => {
res.send("Request to contact")});

// Start the server and have it listen on your chosen port. When it starts, 
// it should log a message to the console, like Server is running on port 3000.

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});


// TEST:
// http://localhost:3000/
// Welcome to The Daily Grind!

// http://localhost:3000/contact
// Request to contact
