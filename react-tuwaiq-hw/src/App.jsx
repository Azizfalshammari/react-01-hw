import './App.css'
import NavBar from './components/NavBar'
import FilterBar from './components/FilterBar'
import CoursesCards from './components/CoursesCards'
import Btn from './components/Btn'
import SignupGuide from './components/SignupGuide'
import FooterBS from './components/FooterBS'
import NavbarBS from './components/NavBarBS'
import HeaderTitle from './components/HeaderTitle'
function App() {


  return (
    <>
    <NavbarBS/>
    <HeaderTitle/>
    <FilterBar/>
    <CoursesCards/>
    <Btn/>
    <SignupGuide/>
    <FooterBS/>
    </>
  )
}

export default App
