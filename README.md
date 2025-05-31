# 🛠 YouTube Backend API

## 🚀 Overview

> This project is a backend API server developed using Node.js and Express.js, designed to simulate the core backend functionality of a YouTube-like application. Created as part of my learning journey, the goal was to gain a comprehensive understanding of RESTful API concepts, including server-side development, routing, request handling, and data operations. Through this project, I explored practical implementations of features such as user management, video handling, and endpoint structuring to strengthen my backend development skills.

## 📁 Project Structure
```bash
backend/
├── src/
│   ├── controllers/       # Contains the logic for handling API requests and responses
│   ├── routes/            # Defines application routes and endpoints
│   ├── models/            # Database schema definitions and models
│   ├── db/                # Database connection and configuration files
│   ├── middlewares/       # Custom middleware functions (e.g., authentication, error handling)
│   ├── utils/             # Utility functions and helpers used across the project
│   ├── constants.js       # Application-wide constants and configuration values
│   ├── app.js             # Initializes Express app and applies middleware and routes
│   └── index.js           # Entry point to start the server and connect to the database
├── public/                # Static assets served by the backend (e.g., images, uploads)
├── .gitignore             # Specifies files and folders to be ignored by Git
├── package.json           # Lists dependencies and scripts for running the project
└── README.md              # Project documentation and overview
```

## Installation 
Clone the repository:
```bash
https://github.com/AakankshaVora/backend-with-JS.git
cd backend
```

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```

## 🛡️ Environment Variables

Create a .env file in the root directory and add the following:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

> Note: Replace dummy values with actual values
## Scripts
Starts the server:
```bash
npm start
```
Starts the server with nodemon for development:
```bash
npm run dev
```
## API Testing
You’re now ready to test the API!

You can use tool like Postman to test the available endpoints. Make sure your server is running before making requests.

> #### Note: All sample data and values used in API requests (such as email, password, tokens, and URLs) are placeholders. Please replace them with your own valid data when testing the endpoints.

## 📥 Postman Collection
You can import the included Postman collection to test the API easily:
1. Open Postman
2. Click Import > File.
3. Upload the You-Tube_postman.json file given in Repository.
4. Test the API endpoints with your data.
