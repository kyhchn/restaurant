import { Routes, Route } from "react-router-dom";
import "./App.css";
import Restaurant from "./pages/Restaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import "@smastrom/react-rating/style.css";

function App() {
  return (
    <Routes>
      <Route path="/restaurants" element={<Restaurant />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
    </Routes>
  );
}

export default App;
