import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}>
    //       <Route path="second" element={<SecondPage />} />
    //       <Route path="third" element={<ThirdPage />} />
    //       <Route path="four" element={<FourthPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
    <SecondPage />
    </>
  );
}

export default App;
