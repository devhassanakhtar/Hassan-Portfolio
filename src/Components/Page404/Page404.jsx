import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";
import PageNotFound from "../../assets/404.png";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="page404-wrapper">
      <div className="page404-content">
        <div className="page404-copy">
          <span className="page404-label">404</span>
          <h1>
            Oops, <span>nothing here...</span>
          </h1>
          <p>
            Uh oh, we can’t seem to find the page you’re looking for.
            Try going back to previous page or Contact us for more information.
          </p>
          <div className="page404-actions">
            <button className="page404-btn primary" onClick={() => navigate("/")}>
              Go Home
            </button>
            <button className="page404-btn secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>

        <div className="page404-image">
          <img src={PageNotFound} alt="404 page not found" />
        </div>
      </div>
    </div>
  );
};

export default Page404;
