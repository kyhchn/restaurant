import { Routes, Route } from "react-router-dom";
import "./App.css";
import Restaurant from "./pages/Restaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import "@smastrom/react-rating/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
