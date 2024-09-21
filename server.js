// server.js

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Initialize express app
const app = express();

// Enable CORS
app.use(cors());

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Check if Cloudinary is properly configured
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Cloudinary credentials are missing!');
    process.exit(1);
}

// Configure multer storage using Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Folder name in your Cloudinary account
        resource_type: 'auto', // This allows to upload various file types
    },
});

// Initialize multer with Cloudinary storage
const upload = multer({ storage: storage });

// Route for uploading files
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // File uploaded successfully, return public URL
    res.json({
        message: 'File uploaded successfully',
        url: req.file.path, // Cloudinary public URL
    });
});

// Route to test server
app.get('/', (req, res) => {
    res.send('Welcome to the File Storage API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
