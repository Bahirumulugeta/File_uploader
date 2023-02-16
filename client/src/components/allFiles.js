import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllFiles = () => {
  
  //modal use state
  const [showDelete, setShowDelete] = useState(false);
  const [getId, setId] = useState(null);
  const [files, setAllFiles] = useState(null);

  //useEffect
  useEffect(() => {
    async function fetchData(){
      const resonse =  await axios.get(
        `http://localhost:3001/api/v1/upload_file`,
      );
      setAllFiles(resonse?.data?.files);
    }
    fetchData();
  }, []);
  const deleteHandle = async() => {
    const id = getId;
    await axios.delete(
      `http://localhost:3001/api/v1/upload_file/${id}`,
    );
    console.log("delete successfully");
    setShowDelete(false);
    window.location.reload();
  };
  return (
    <>
      <div className="w-full flex justify-center overflow-auto">
        <div className="block rounded-lg shadow-lg bg-gray-50 w-full mx-20 my-20 ">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className=" mb-5 inline-block min-w-full ">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="border bg-gray-100 text-gray-900">
                    <tr>
                      <th scope="col" className="text-left font-bold px-6 py-2">
                        Name
                      </th>
                      <th scope="col" className="text-left font-bold px-6 py-2">
                        Size
                      </th>
                      <th scope="col" className="text-left font-bold px-6 py-2">
                        Date
                      </th>
                      <th scope="col" className="text-left font-bold px-6 py-2">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {files?.length <= 0 ? (
                      <tr>
                        <td className="text-center"> No Record Found</td>
                      </tr>
                    ) : (
                      files?.map((fileList, index) => (
                        <tr
                          key={index}
                          className="border  hover:bg-gray-100 text-gray-900"
                        >
                          <td className="text-left text-gray-900 px-6 py-2 whitespace-nowrap">
                            {fileList?.name}
                          </td>
                          <td className="text-left text-gray-900 px-6 py-2 whitespace-nowrap">
                            {fileList?.size}
                          </td>
                          <td className="text-left text-gray-900 px-6 py-2 whitespace-nowrap">
                            {fileList?.createdAt}
                          </td>

                          <td className="space-x-2 px-6 py-2 whitespace-nowrap text-left text-white">
                            <button
                              onClick={() => {
                                setId(fileList?.id);
                                setShowDelete(true);
                              }}
                              type="button"
                              className="rounded-lg inline-flex items-center bg-red-600 hover:bg-red-800 px-6 py-2 text-center
                                shadow-lg focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Delete
                            </button>
                          </td>
                          {/* Delete modal */}
                          {showDelete ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-12">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex justify-end p-2">
                                      <button
                                        onClick={() => setShowDelete(false)}
                                        type="button"
                                        className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                        data-modal-toggle="delete-user-modal"
                                      >
                                        <svg
                                          className="w-6 h-6"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          ></path>
                                        </svg>
                                      </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                      <div className="p-6 pt-0 text-center">
                                        <svg
                                          className="w-20 h-20 text-red-600 mx-auto"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                          ></path>
                                        </svg>
                                        <h3 className="text-lg text-gray-900 mt-5 mb-6">
                                          Are you sure you want to delete this
                                          file?
                                        </h3>

                                        <Link
                                          onClick={() => setShowDelete(false)}
                                          to="#"
                                          className="inline-flex items-center rounded-lg text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 px-3 py-2.5 text-center mr-2"
                                          data-modal-toggle="delete-user-modal"
                                        >
                                          No, cancel
                                        </Link>
                                        <Link
                                          onClick={() => deleteHandle()}
                                          to="#"
                                          className="rounded-lg inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 items-center px-3 py-2.5 text-center "
                                        >
                                          Yes, I'm sure
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllFiles;
