import { Link } from "react-router-dom";
import "../styles/styles.css";

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Home Page</h1>
      <Link to="/form" className="button">Go to Form</Link>
    </div>
  );
}

export default HomePage;