import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import { predictFraudDecisionTree } from "../utils/decisionTreePredictionService";

function DecisionTreePredictionPage() {
  const [formData, setFormData] = useState({
    day_of_week: "",
    time: "",
    type_of_card: "",
    entry_mode: "",
    amount: "",
    type_of_transaction: "",
    merchant_group: "",
    country_of_transaction: "",
    country_of_residence: "",
    gender: "",
    age: "",
    bank: "",
  });

  const [predictedFraud, setPredictedFraud] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    setLoading(true);
    setError("");
    setPredictedFraud("");

    const result = await predictFraudDecisionTree(formData);

    if (result.success) {
      setPredictedFraud(result.predictedFraud);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="title">Transaction Information Form</h2>
      <form className="form-container">
        <div className="form-group">
          <label>Day of Week:</label>
          <input
            type="text"
            name="day_of_week"
            value={formData.day_of_week}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Type of Card:</label>
          <input
            type="text"
            name="type_of_card"
            value={formData.type_of_card}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Entry Mode:</label>
          <input
            type="text"
            name="entry_mode"
            value={formData.entry_mode}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Type of Transaction:</label>
          <input
            type="text"
            name="type_of_transaction"
            value={formData.type_of_transaction}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Merchant Group:</label>
          <input
            type="text"
            name="merchant_group"
            value={formData.merchant_group}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Country of Transaction:</label>
          <input
            type="text"
            name="country_of_transaction"
            value={formData.country_of_transaction}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Country of Residence:</label>
          <input
            type="text"
            name="country_of_residence"
            value={formData.country_of_residence}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Bank:</label>
          <input
            type="text"
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button
          type="button"
          className="button predict"
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Fraud"}
        </button>

        {error && <p className="error-message">{error}</p>}

        {predictedFraud !== "" && (
          <div className="prediction-result">
            <label>Predicted Fraud:</label>
            <span className="predicted-value">
              {predictedFraud ? "Fraudulent" : "Not Fraudulent"}
            </span>
          </div>
        )}
      </form>

      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default DecisionTreePredictionPage;
