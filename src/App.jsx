import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import List from "./pages/List/List.jsx";
import Details from "./pages/Details/Details.jsx";
import PhotoResult from "./pages/PhotoResult/PhotoResult.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/photo" element={<PhotoResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;