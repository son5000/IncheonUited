import { BrowserRouter, Routes ,Route } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Login from "./page/Login/Login";
import JoinUs from "./page/Login/JoinUs";
import Certification from "./page/Login/Certification"
import MemberInformation from "./page/Login/MemberInformation"
import RegistrationComplete from "./page/Login/Registrationcomplete"
import ManagerLogin from "./page/ManagementTeam/ManagerLogin"
import ManagerMain from "./page/ManagementTeam/ManagerMain"
import Introduction from "./page/Club/introduction/introduction";
import Vision from "./page/Club/introduction/vision";
import Organization from "./page/Club/introduction/organization";
import Emblem from "./page/Club/introduction/emblem";
import History from "./page/Club/introduction/history";
import Greeting from "./page/Club/greeting/greeting";
import Stadium from "./page/Club/stadium/stadium";
import ParkingInformation from "./page/Club/stadium/parkingInformation";
import SeatInformation from "./page/Club/stadium/seatInformation";
import Pro from "./page/Player/pro";
import Schedule from "./page/Player/schedule";
import CoachingStaff from "./page/Player/coachingStaff";
import GameSchedule from "./page/MatchCenter/gameSchedule";
import Rangking from "./page/MatchCenter/ranking";
import Announcement from "./page/FanZone/announcement";
import CheeringGrounds from "./page/FanZone/cheeringGrounds";
import CheerSong from "./page/FanZone/cheerSong";
import Gallery from "./page/FanZone/gallery";
import Magazine from "./page/FanZone/magazine";
import News from "./page/FanZone/news";
import UtdReporter from "./page/FanZone/utdReporter";
import Vod from "./page/FanZone/vod";
import LostItem from "./page/FanZone/lostItem";
import Event from "./page/FanZone/event";
import '../src/css/import.css'
import BuyTickets from "./page/TicketMembership/buyTickets";
import BuyMembership from "./page/TicketMembership/buyMembership";
import GroupTour from "./page/TicketMembership/groupTour";
import FrequentlyQandA from "./page/TicketMembership/frequentlyQandA"
import { Provider } from "react-redux";
import store from "./Redux/setting";

export default function Root() {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index  element={<Home />} />
              <Route path="club">
                <Route index path="introduction" element={<Introduction />} />
                <Route path="introduction/vision" element={<Vision />}/>
                <Route path="introduction/tel" element={<Organization />}/>
                <Route path="introduction/emblem" element={<Emblem />}/>
                <Route path="introduction/history" element={<History />}/>
                <Route path="greeting" element={<Greeting />}/>
                <Route path="stadium" element={<Stadium />}/>
                <Route path="stadium/parkingInformation" element={<ParkingInformation />}/>
                <Route path="stadium/seatInformation" element={<SeatInformation />}/>
              </Route>
              <Route path="player">
                <Route index path="coachingstaff" element={<CoachingStaff />} />
                <Route path="pro" element={<Pro />} />
                <Route path="schedule" element={<Schedule />} />
              </Route>
              <Route path="matchCenter">
              <Route index path="gameSchedule" element={<GameSchedule />}/>
              <Route path="ranking" element={<Rangking />}/>
              </Route>
              <Route path="fanZone">
                <Route index path="announcement" element={<Announcement />} />
                <Route  path="cheeringGrounds" element={<CheeringGrounds />} />
                <Route  path="cheerSong" element={<CheerSong />} />
                <Route  path="gallery" element={<Gallery />} />
                <Route  path="magazine" element={<Magazine />} />
                <Route  path="news" element={<News />} />
                <Route  path="utdReporter" element={<UtdReporter />} />
                <Route  path="vod" element={<Vod />} />
                <Route  path="lostItem" element={<LostItem />} />
                <Route  path="event" element={<Event />} />
              </Route>
              <Route path="ticketMembership">
                <Route index path ="buyTickets" element={<BuyTickets />} />
                <Route  path ="buyMembership" element={<BuyMembership />} />
                <Route  path ="groupTour" element={<GroupTour />} />
                <Route  path ="frequentlyQ&A" element={<FrequentlyQandA />} />
              </Route>
              <Route path="Login">
                <Route index element ={<Login />} />
                <Route path="joinUs" element={<JoinUs />} />
                <Route path="joinUs/Certification" element={<Certification />} />
                <Route path="joinUs/Certification/MemberInformation" element={<MemberInformation />} />
                <Route path="joinUs/Certification/MemberInformation/RegistrationComplete" element={<RegistrationComplete />} />
              </Route>
              <Route path="managementTeam">
                <Route path="login" element ={<ManagerLogin />} />
                <Route path="main" element ={<ManagerMain />} />
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}
