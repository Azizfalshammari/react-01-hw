import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const getEventStyles = (eventType, isExpired) => {
  let borderColor = "";
  let buttonDisabled = false;
  let buttonText = "التفاصيل";
  let buttonColor = "";

  if (isExpired) {
    borderColor = "grey";
    buttonDisabled = true;
    buttonText = "التفاصيل";
    buttonColor = "grey";

  } else {

    if (eventType === "لقاء") {
      borderColor = "pink";
      buttonColor = "pink";
    } else if (eventType === "معسكر") {
      borderColor = "#4E3797"; 
      buttonColor = "#4E3797";
    } else if (eventType === "برنامج") {
      borderColor = "green";
      buttonColor = "green";
    } else {
      borderColor = "black";
      buttonColor = "black";
    }
  }

  return { borderColor, buttonDisabled, buttonText, buttonColor };
};

export default function Card(props) {
  const { eventType, eventTitle, eventLocation, duration, eventDuration, isExpired } = props;
  const { borderColor, buttonDisabled, buttonText, buttonColor } = getEventStyles(eventType, isExpired);

  return (
    <div className="container mt-5 mb-5" id={isExpired ? '' :'Card'} style={{ width: "24rem"}}>
      <div className="d-flex justify-content-center">
        <div className="card p-4" style={{ 
          width: "19rem", 
          maxWidth: "350px", 
          backgroundColor: "#F5F6FA",
          borderRight: `10px solid ${borderColor}`, 
          borderRadius: "0.5rem",
        }}>
          <div className="d-flex justify-content-end">
            <h2>{eventType}</h2>
          </div>
          <p className="text-center">{eventTitle}</p>
          

          <div className='d-grid column'>
          <div className="d-grid justify-content-end mt-n4" style={{ bottom: "1rem", right: "1rem" }}>
            <div className="icon-text d-flex align-items-end mb-2">
              <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="Location Icon" className="me-2"/>
              <span>{eventLocation}</span>
            </div>
            <div className="icon-text d-flex align-items-center mb-2">
              <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="Duration Icon" className="me-2"/>
              <span>{duration}</span>
            </div>
            <div className="icon-text d-flex align-items-center mb-2">
              <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="Calendar Icon" className="me-2"/>
              <span>{eventDuration}</span>
            </div>

          </div>
          <div className="justify-self-end">
            <button 
              className={`btn ${buttonDisabled ? 'btn-outline-secondary' : 'btn-outline-primary'}`} 
              style={{ borderColor: buttonColor, color: buttonColor, cursor: buttonDisabled ? 'not-allowed' : 'pointer' }}
              disabled={buttonDisabled}
            >
              {buttonText}
            </button>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}
