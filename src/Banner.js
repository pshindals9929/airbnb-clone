import React from "react";
import "./Banner.css";
import Button from "@material-ui/core/Button";

function Banner() {
  return (
    <div className="cover">
      <div className="banner_info">
        <h1>Go Near</h1>
        <p>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </p>
        <Button variant="outlined" color="primary" disableElevation>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
