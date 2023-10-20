import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Gender = ({ setGender, setPageNumber }) => {
  var genders = ["female", "male", "genderless", "unknow"];

  return (
    <div className="accordion-item">
      <h2 className=" accordion-header" id="headingThree">
        <button
          className="bg-dark text-white accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Genero
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="bg-dark accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setGender}
                items={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
