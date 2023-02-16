// AppError
const AppError = require("../../utils/appError");

const fs = require("fs");

// database
const db = require("../../loaders/model");

// Upload new file
exports.create = async (req, res, next) => {
  try {
    // Upload file
    const sql = "INSERT INTO files(name,size) VALUES(?,?)";
    db.query(sql, [req.file.filename, req.file.size], (err, file) => {
      if (err) {
        return next(new AppError("Add new file error", 400));
      }
      // Response
      res.status(200).json({
        success: true,
        data: "Created successfully",
      });
    });
  } catch (error) {
    next(error);
  }
};
// Get all files
exports.getAll = async (req, res, next) => {
  try {
    // Query
    const sql = "SELECT * FROM files";

    db.query(sql, (err, files) => {
      if (err) {
        return next(new AppError("Fetch files error", 400));
      }
      // Response
      res.status(200).json({
        success: true,
        length: files.length,
        files: files,
      });
    });
  } catch (error) {
    next(error);
  }
};

// Delete file by id
exports.deleteById = async (req, res, next) => {
  try {
    // Delete file by id
    const id = req.params.id;
    const sql = "DELETE FROM files WHERE id = ?";
    // Execute
    db.query(sql, id, (err, file) => {
      if (err) {
        next(err);
      }
      // Response
      res.status(200).json({
        success: true,
        message: "File delete successfully",
      });
    });
  } catch (error) {
    next(error);
  }
};
