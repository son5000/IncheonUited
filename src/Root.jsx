import { BrowserRouter, Routes ,Route } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Introduction from "./page/Club/introduction/introduction";
import Vision from "./page/Club/introduction/vision";
import Organization from "./page/Club/introduction/organization";
import Emblem from "./page/Club/introduction/emblem";
import History from "./page/Club/introduction/history";
import Greeting from "./page/Club/greeting/greeting";
import Stadium from "./page/Club/stadium/stadium";
import Parking from "./page/Club/stadium/parking";
import Seat from "./page/Club/stadium/seat";
import Pro from "./page/Player/pro";
import Schedule from "./page/Player/schedule";
import CoachingStaff from "./page/Player/coachingStaff";
import GameSchedule from "./page/MatchCenter/gameSchedule";
import Rangking from "./page/MatchCenter/ranking";
import '../src/css/import.css'


export default function Root() {
  return (
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
              <Route path="stadium/parking" element={<Parking />}/>
              <Route path="stadium/seat" element={<Seat />}/>
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
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
