import React from "react";
import Deneme from "../Components/Deneme";
import "../Styles/homepage.scss";

function HomePage() {
  return (
    <React.StrictMode>
      <div className="container">
        <Deneme />
      </div>
    </React.StrictMode>
  );
}

export default HomePage;
