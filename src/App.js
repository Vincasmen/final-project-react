import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Signs from "./pages/Signs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signs" element={<Signs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
