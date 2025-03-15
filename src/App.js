import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CountryPredictPage from "./components/CountryPredictPage";
import HomePage from "./components/HomePage";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<CountryPredictPage />} />
      </Routes>
    </Router>
  );
}

export default App;