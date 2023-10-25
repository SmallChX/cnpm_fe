import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login'
import UserInfo from "./pages/UserInfo";
import ActivityListPage from "./pages/Activites";
import ActivityDetailPage from "./pages/ActivityDetail";
import NewActivity from "./pages/NewActivity";

function App() {
  
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/user-info">Thông tin người dùng</Link></li>
              <li><Link to="/activities">Hoạt động</Link></li>
            </ul>
          </nav>
        </div>
        
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user-info" element={<UserInfo/>}/>
          <Route path="/activities" element={<ActivityListPage/>}/>
          <Route path="/activity/:id" element={<ActivityDetailPage/>} />
          <Route path="/create-activity" element={<NewActivity/>}/>
        </Routes>
      </Router>
  );
}

export default App;
