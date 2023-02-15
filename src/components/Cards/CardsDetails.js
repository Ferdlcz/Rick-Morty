import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Cards.module.scss";

export const CardsDetails = () => {
  var { id } = useParams();
  var [fetchedData, updateFetchedData] = useState([]);
  var { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  var api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function abc() {
      var data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="container  d-flex justify-content-center">
      <div className={`${styles.cards} card bg-dark text-white`}>
        <img src={image} className="card-img-top img-fluid" alt="" />
        <div className="bg-dark card-body">
        <h1 className="text-center">{name}</h1>
        {(() => {
          if (status === "Dead") {
            return <div  className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>;
          } else if (status === "Alive") {
            return <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>;
          } else {
            return <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>;
          }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold-5">Gender: </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold-5">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold-5">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold-5">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold-5">Type: </span>
            {type === "" ? "Unknown" : type}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
