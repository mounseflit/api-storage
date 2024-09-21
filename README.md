# File Storage Backend

This is a simple backend built with Node.js and Express.js for uploading files (PDFs, images, docs, audio, etc.) to Cloudinary and retrieving public URLs.

## Features

- File upload using Multer
- Cloud storage via Cloudinary
- CORS enabled for frontend communication
- Free-tier hosting on Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/file-storage-backend.git
   cd file-storage-backend
     ```
   
2. Install dependencies:

  ```bash
Copy code
npm install
Create a .env file and add your Cloudinary credentials.
  ```

3. Running the App
   
**For development:**

  ```
npm run dev
  ```

**For production:**
  ```
npm start
  ```

**Deployment
To deploy on Vercel, use:**

  ```
vercel
```

**License**
  ```This project is licensed under the MIT License.  ```

### Final Steps

1. **Install Nodemon** (for development):
   To install `nodemon` for live reloading during development, run:
   ```bash
   npm install --save-dev nodemon
     ```
2. **Push to a Git Repository**:
    Make sure to initialize a git repository and push your code to GitHub or another hosting service if you plan to maintain version control.

3. **Deploy**:
   Use the Vercel CLI as described earlier to deploy your application.

With these files in place, your project should be well-organized and ready for deployment on Vercel. If you have any more questions or need further assistance, feel free to ask!
