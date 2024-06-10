import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function FooterBS() {
  return (
    <>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#4e3797" }}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="Right Logo" className="mb-3" style={{width: "10rem"}}/>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <div className="d-flex justify-content-center my-3">
                  <a href="" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faFacebook} size="1x" className="text-white" />
                  </a>
                  <a href="" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faTwitter} size="1x" className="text-white" />
                  </a>
                  <a href="" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faGoogle} size="1x" className="text-white" />
                  </a>
                  <a href="" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faInstagram} size="1x" className="text-white" />
                  </a>
                  <a href="" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" className="text-white" />
                  </a>
                </div>
                <p>@TuwaiqAcademy</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>الشروط والأحكام</p>
                <p>سياسة الخصوصية</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>شارك كمدرب</p>
                <p>حول الأكاديمية</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" style={{width: "10rem"}} alt="Left Logo" className="mb-3" />
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          جميع الحقوق محفوظة لأكاديمية طويق 2024
        </div>
      </footer>
    </>
  );
}

export default FooterBS;
