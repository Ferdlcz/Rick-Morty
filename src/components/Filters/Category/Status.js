import React from 'react'
import { FilterBTN } from '../FilterBTN'

export const Status = ({setStatus, setPageNumber}) => {

    var status = ["Alive", "Dead", "Unknown"];

  return (

    <div className="accordion-item">
      <h2 className=" accordion-header" id="headingOne">
        <button
          className="bg-dark text-white accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="bg-dark accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={setStatus}
              setPageNumber={setPageNumber}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
