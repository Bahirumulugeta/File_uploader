const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/files');
    },
    filename: function (req, file, cb) {
      cb(
        null,file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".pdf" && ext !== ".doc" && ext !== ".ppt") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
  limits: { fileSize: 10485760 }

});