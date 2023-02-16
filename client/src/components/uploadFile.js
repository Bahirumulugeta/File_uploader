import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //formik
  const formik = useFormik({
    initialValues: {
      file_path: null,
    },
    onSubmit: (values) => {
      console.log(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);
      const result = axios.post(
        `http://localhost:3001/api/v1/upload_file`,
        formData
      );
      console.log(result);
    },
  });
  return (
    <>
      <div className="flex justify-center items-center" 
>
        <form onSubmit={formik.handleSubmit} className="mx-14 my-20" style={{ backgroundColor: "hsl(0, 0%, 95%)" }}>
          <div className="mx-8">
            <label className="inline-block mb-2 text-textColor font-bold">
              File:
            </label>
            <input
              onChange={(event) => {
                setSelectedFile(event.target.files[0]);
              }}
              onBlur={formik.handleBlur("file_path")}
              className="w-full block border border-gray-light px-6 py-2 rounded mb-4 shadow-lg focus:outline-none transform transition"
              type="file"
              accept="*"
              name="file_path"
              autoFocus
              required
            />
          </div>
          <div className="flex items-center justify-center p-6">
            <button
              className="mb-8 rounded-lg text-center py-2 px-12 bg-cyan-600 text-white text-xl hover:bg-cyan-700 shadow-lg focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UploadFile;
