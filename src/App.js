import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import Default from "./Component/Default/Default";
import Instant from "./Component/Instantaneous/Instant";
import FirstPage from "./Pages/FirstPage";


function App() {
  return (
    <Routes>
      <Route path="/"  element={<HomePage />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/four" element={<FourthPage />} />
    </Routes>
    
  );
}

export default App;
