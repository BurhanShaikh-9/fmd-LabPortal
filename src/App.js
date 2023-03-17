import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Layout } from './Main/layout';
import { Sidebar } from './Main/Component/sidebar';
import { Dashboard } from './Main/WebPage/dashboard/dashboard';
import {Appointment} from './Main/WebPage/appointment/appointment'
import { ROUTES } from './utils/Routes';
import { Profile } from './Main/WebPage/labProfile/profile';
import { AppointmentDetails } from './Main/WebPage/appointment/appointmentDetails';
import { AddTeam } from './Main/WebPage/teamMembers/addTeam';
import { AddTest } from './Main/WebPage/labTests/addTest';
import { ManageTeam } from './Main/WebPage/teamMembers/manageTeam';
import { ManageTest } from './Main/WebPage/labTests/manageTest';


export const SidebarContext = createContext({ sideBar: false, setSideBar: () => { } })

function App() {
  //for sideBar and top header functionality
  const [sideBar, setsideBar] = useState(false);
  const getSideBarPos = (value) => {
    setsideBar(!value);
  }

  return (
    <>
      <SidebarContext.Provider value={{ sideBar: sideBar, setSideBar: setsideBar }}>
        <Sidebar />
        <div className={sideBar ? 'AppFull' : 'App'}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOMEPAGE} element={<Dashboard />} />
              <Route path={ROUTES.APPOINTMENT} element={<Appointment />} />
              <Route path={ROUTES.APPOINTMENT_DETAILS} element={<AppointmentDetails/>} />
              <Route path={ROUTES.PROFILE} element={< Profile />} />
              <Route path={ROUTES.ADD_TEAM} element={< AddTeam />} />
              <Route path={ROUTES.ADD_TEST} element={< AddTest />} />
              <Route path={ROUTES.MANAGE_TEAM} element={< ManageTeam />} />
              <Route path={ROUTES.MANAGE_TEST} element={< ManageTest />} />
            </Route>
          </Routes>
        </div>
      </SidebarContext.Provider>
      
      {/* <Login /> */}

    </>
  );
}

export default App;
