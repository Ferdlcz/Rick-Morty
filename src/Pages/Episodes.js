import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import { InputGroup } from "../components/Filters/Category/InputGroup";

export const Episodes = () => {
  var [id, setID] = useState(1);
  var [info, setInfo] = useState([]);
  var [results, setResults] = useState([]);
  var { air_date, name } = info;
  var api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      var data = await fetch(api).then((res) => res.json(0));
      setInfo(data);

      var a = await Promise.all(
        data.characters.map((x) => {
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
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" setID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};
