import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-logo">
            <img src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="شعار الأكاديمية" width="100"/>
        </div>
        <div className="footer-text">
            <p>شارك كمدرب</p>
            <p>حول الأكاديمية</p>
        </div>
        <div className="footer-links">
            <a href="#">الشروط والأحكام</a>
            <a href="#">سياسة الخصوصية</a>
        </div>
        <div className="footer-social">
            <div className="footer-social-media"><img src="https://tuwaiq.edu.sa/icons/discord-icon.svg" alt="Discord"/>
                <img src="https://tuwaiq.edu.sa/icons/twitter-icon.svg" alt="Twitter"/>
                <img src="https://tuwaiq.edu.sa/icons/youtube-icon.svg" alt="YouTube"/>
                <img src="https://tuwaiq.edu.sa/icons/snapchat-icon.svg" alt="Snapchat"/>
                <img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg" alt="LinkedIn"/>
            </div>

            <div className="footer-note">
                @TuwaiqAcademy
            </div>

        </div>

        <div className="footer-end-logo">
            <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="شعار الأكاديمية" width="100"/>
        </div>

    </div>
    <div className="copyright">
        <h5> جميع الحقوق محفوظة لأكاديمية طويق 2024
        </h5>
    </div>
    </>
  )
}

export default Footer