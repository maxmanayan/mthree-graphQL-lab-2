import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/home">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
