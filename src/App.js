import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CountryPredictPage from "./components/CountryPredictPage";
import HomePage from "./components/HomePage";
import "./styles/styles.css";
import LRFraudPredictionPage from "./components/LogisticRegFraudPrediction";
import DecisionTreePredictionPage from "./components/DecisionTreePredictionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countrypredictform" element={<CountryPredictPage />} />
        <Route path="/lrfraudpredictform" element={<LRFraudPredictionPage />} />
        <Route path="/dtfraudpredictform" element={<DecisionTreePredictionPage />} />
      </Routes>
    </Router>
  );
}

export default App;