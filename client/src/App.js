import { Route, Routes } from "react-router-dom";

// page routes
// Import
import AllFiles from "./components/allFiles";
import UploadFile from "./components/uploadFile";

function App() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Routes>
          <Route path="/" element={<AllFiles />}></Route>
          <Route path="/upload-file" element={<UploadFile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
