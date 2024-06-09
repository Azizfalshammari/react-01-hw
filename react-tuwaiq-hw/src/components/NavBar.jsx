import React from 'react'

function NavBar() {
  return (
    <>
    <div className="navbar">
        <div>
        <div className="logo img">
            <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="أكاديمية طويق"/>
        </div>
        </div>
        <ul className="nav-links">
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">المعسكرات والبرامج </a></li>
            <li><a href="about.html">حول الاكاديمة</a></li>
            <li><a href="#contact">الاكاديميات التابعة</a></li>
            <li><a href="test.html">مركز الاختبارات</a></li>
        </ul>
        <div className="sidelogos">
            <a href="#contact">تسجيل الدخول </a>
            <a href="#contact">English </a>
        </div>
    </div>
   
    </>
  )
}

export default NavBar