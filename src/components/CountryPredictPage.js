import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function CountryPredictPage() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    origin_country: "",
    state: "",
    hotel_rating: "",
    no_of_days: "",
    no_of_people: ""
  });

  const [predictedCountry, setPredictedCountry] = useState(""); // store predicted country

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = () => {

  };

  return (
    <div className="container">
      <h2 className="title">Destination Country Prediction</h2>
      <form className="form-container">
        <div className="form-group">
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>Origin Country:</label>
          <input type="text" name="origin_country" value={formData.origin_country} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>Hotel Rating:</label>
          <input type="text" name="hotel_rating" value={formData.hotel_rating} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>No of Days:</label>
          <input type="text" name="no_of_days" value={formData.no_of_days} onChange={handleChange} className="input" />
        </div>

        <div className="form-group">
          <label>No of People:</label>
          <input type="text" name="no_of_people" value={formData.no_of_people} onChange={handleChange} className="input" />
        </div>

        <button type="button" className="button predict" onClick={handlePredict}>
          Predict Destination Country
        </button>

        <div className="prediction-result">
          <label>Predicted Country:</label>
          <span className="predicted-value">{predictedCountry}</span>
        </div>
      </form>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default CountryPredictPage;
