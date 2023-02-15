import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import { InputGroup } from "../components/Filters/Category/InputGroup";

export const Location = () => {
  var [id, setID] = useState(1);
  var [info, setInfo] = useState([]);
  var [results, setResults] = useState([]);
  var { name, type, dimension } = info;
  var api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      var data = await fetch(api).then((res) => res.json(0));
      setInfo(data);

      var a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
          Type: {type === "" ? "Unknown" : type}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" setID={setID} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};
