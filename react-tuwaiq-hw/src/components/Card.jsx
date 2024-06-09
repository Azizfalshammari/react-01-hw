import React from 'react'

export default function Card() {
  return (
    <section>
    <h2 className="program"> المعسكرات والبرامج</h2>
    <div className="cards">
        <div className="card">
            <h2>لقاء</h2>
            <p>حوكمة وسرية البيانات في بيئة العمل</p>
            <div className="icon-text">
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="Location Icon"/>
                <span>الرياض</span>
            </div>
            <div className="icon-text">
                <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="Duration Icon"/>
                <span>يوم واحد</span>
            </div>
            <div className="icon-text">
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="Calendar Icon"/>
                <span>يبدأ في 15/05/2024</span>
            </div>
            <button className="details-button">التفاصيل</button>
        </div>

       </div>
    <div class="bootcampsbtn"><a className="bootcampsbtnlink" href="">المزيد من المعسكرات والبرامج </a></div>
</section>

  )
}
