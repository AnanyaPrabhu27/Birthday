import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import LetterPage from "./pages/LetterPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/letter/:id" element={<LetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
