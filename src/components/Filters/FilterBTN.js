import React from 'react'

export const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
    <div>
        <style jsx ="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

    <div className="form-check">
        <input
            onClick={(x)=>{
                setPageNumber(1);
                task(items);
            }
            }
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="text-white  btn btn-outline-light"htmlFor={`${name}-${index}`}>   
          {items}
        </label>
      </div>
    </div>
    
  )
}
