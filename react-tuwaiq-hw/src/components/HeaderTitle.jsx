import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderTitle() {
  return (
    <div className="d-flex align-items-center justify-content-center justify-content-sm-end w-100 py-4 mt-5 text-white" style={{ backgroundColor: "#4e3797" }}>
      <div className="text-center display-4 sm:text-end sm:px-5" style={{ marginRight: "10px" }}>
        أكاديمية طويق
      </div>
    </div>
  );
}

export default HeaderTitle;
