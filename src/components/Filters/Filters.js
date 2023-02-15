import React from "react";
import Gender from "./Category/Gender";
import { Species } from "./Category/Species";
import { Status } from "./Category/Status";

export const Filters = ({
  setStatus,
  setPageNumber,
  setGender,
  setSpecies,
}) => {
  var clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="mb-4 col-lg-3 col-12">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>

      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className=" text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
