import { Link } from "react-router-dom";
import "../styles/styles.css";

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Home Page</h1>
      <Link to="/countrypredictform" className="homepgbutton">Go to Country Predict</Link>
      <Link to="/lrfraudpredictform" className="homepgbutton">Go to LR Fraud Predict</Link>
      <Link to="/dtfraudpredictform" className="homepgbutton">Go to DT Fraud Predict</Link>
    </div>
  );
}

export default HomePage;