// Dotenv
require("dotenv").config();

// Config variables
const config = {
  env: process.env.NODE_ENV,
  db: {
    database: process.env.DATABASE,
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD
  },
  cloudinary:{
    name: process.env.CLOUDINARY_CLOUD_NAME,
    key: process.env.CLOUDINARY_API_KEY,
    secret: process.env.CLOUDINARY_API_SECRET
  },
  port: process.env.PORT,
  
};

// Export
module.exports = config;
