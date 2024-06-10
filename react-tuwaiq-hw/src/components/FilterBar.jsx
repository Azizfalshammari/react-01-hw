import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

function FilterBar() {
  return (

    <div className="container d-flex flex-column flex-md-row bg-light rounded shadow p-4 mt-5 align-items-center gap-4" style={{ backgroundColor: "#F5F6FA", maxWidth: "80vw", marginTop: "4rem" }}>
      <button className="btn btn-secondary order-3 order-md-1" style={{ backgroundColor: "gray", color: "white" }}>
      <FontAwesomeIcon icon={faFilter} size="1x" className="text-white" />
</button>
      <div className="d-flex flex-row justify-content-center w-100 order-2">
        <button className="btn btn-primary mx-2 text-white" style={{ backgroundColor: "#4E3797" }}>
          الكبار
        </button>
        <button className="btn btn-outline-primary mx-2" style={{ color: "#4E3797", borderColor: "#4E3797" }}>
          الناشئون
        </button>
      </div>
      <p className="text-purple fw-bold text-center fs-2 fs-md-1 order-1 order-md-3" style={{ color: "#4E3797", width: "100%" }}>
        المعسكرات والبرامج
      </p>
    </div>
  );
}



  

export default FilterBar