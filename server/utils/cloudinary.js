// Cloudinary
const cloudinary = require("cloudinary").v2;
// Local config 
const config = require("../configs");
// Cloudinary config
cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.key,
  api_secret: config.cloudinary.secret,
});
// Upload to cloud
const cloudinaryUploading = async (fileToUpload) => {
  try {
    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {cloudinaryUploading};