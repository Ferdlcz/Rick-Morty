import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Species = ({ setSpecies, setPageNumber }) => {
  var species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item ">
      <h2 className="accordion-header">
        <button
          className="bg-dark text-white accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Especies
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="bg-dark text-white accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setSpecies}
                items={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
