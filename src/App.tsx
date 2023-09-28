import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detail" element={<Detail/>}/>
  </Routes>;
}

export default App;
