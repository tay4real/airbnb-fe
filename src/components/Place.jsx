import React from "react";
import Slider from "./Slider";

export default function Place(props) {
  return (
    <div className="col pb-5">
      <div className="pb-4 slider">
        <Slider  />
      </div>

      <div>
        <span>
          <i className="fas fa-star text-danger"></i>
        </span>{" "}
        4.47<span> (19)</span>
      </div>
      <div className="font-size-1">
        <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
      </div>
      <div className="font-size-1">
        Chic Studio Apartment In the Best Part of Lekki!{" "}
      </div>
      <div className="font-size-1">
        <span className="bold">$50</span> / night
      </div>
    </div>
  );
}
