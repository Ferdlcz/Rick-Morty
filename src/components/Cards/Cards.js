import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

export const Cards = ({ results, page }) => {
  var display;

  if (results) {
    display = results.map((x) => {
      var { id, name, image, location, status, species } = x;
      return (
        <Link
          style={{ textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-12 position-relative mb-5"
        >
          <div className={`${styles.cards} card bg-dark text-white`}>
            <img
              src={image}
              className="card-img-top img-fluid"
              alt="Rick & Morty images"
            />
            <div className="card-body">
              <div className="fs-4 fw-bold">{name}</div>
              <hr />
              <div className="fs-6">Ultima ubicacion</div>
              <div className="fs-5">{location.name}</div>
              <hr />
              <div className="fs-6">Especies</div>
              <div className="fs-5">{species}</div>
              <div className="fs-6 mt-4">CLick para mas informacion...</div>
            </div>
            {(() => {
              if (status === "Muerto") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Vivo") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </Link>
      );
    });
  } else {
    display = "No se encontraron personajes :/";
  }

  return (
    <>{display}</>

    //<div className='col-sm-4'>{display}</div>
  );
};
