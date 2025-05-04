import NavBar from "./components/NavBar"; 
import  EventPage  from "./components/EventPage";
import EventOverview  from "./components/EventOverview";
import Speakers  from "./components/Speakers";
import Agenda  from "./components/Agenda.tsx";
import About  from "./components/About";
import Registration from "./components/Registration.tsx";
import Footer  from "./components/Footer.tsx";


import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <EventPage/>
      <EventOverview/>
      <Speakers/>
      <Agenda/>
      <About/>
      <Registration/> 
      <Footer/> 

    </>
  );
}

export default App;
