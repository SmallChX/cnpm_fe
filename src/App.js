import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import React from "react";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import ActivityListPage from "./pages/Activites";
import ActivityAdminListPage from "./pages/Activities_admin";
import ActivityToVPListPage from "./pages/Activities_ToVP";
import ActivityDetailPage from "./pages/ActivityDetail";
import NewActivity from "./pages/NewActivity";
import SystemPage from "./pages/SystemPage";
import Navbar from "./Navbar";
import ActivityStatistics from "./pages/ActivityStatistics";
import TrendStatistics from "./pages/TrendStatistics";
import AccountDecentralise from "./pages/AccountDecentralise";
import ForgotPassword from "./components/ForgotPassword";

function DefaultContainer() {
  return (
    <div class="container-md row">
      <Navbar />
      <div class="col-10 content-column">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DefaultContainer />}>
          {/* Các Route con sẽ được render ở đây */}
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/activities" element={<ActivityListPage />} />
          <Route path="/activitiesAdmin" element={<ActivityAdminListPage />} />
          <Route path="/activitiesToVP" element={<ActivityToVPListPage />} />
          <Route path="/activity/:id" element={<ActivityDetailPage />} />
          <Route path="/create-activity" element={<NewActivity />} />
          <Route path="/system-page" element={<SystemPage />} />
          <Route path="/activity-statistics" element={<ActivityStatistics />} />
          <Route path="/trend-statistics" element={<TrendStatistics />} />
          <Route
            path="/account-decentralise"
            element={<AccountDecentralise />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
