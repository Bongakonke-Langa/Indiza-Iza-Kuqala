// index.js
require('dotenv').config();

// Now you can access your variables
const port = process.env.PORT;
console.log(`Server running on port: ${port}`);

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve your HTML file
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

