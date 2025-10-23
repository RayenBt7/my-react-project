import React from "react";
import { UserProvider } from "./TP_Profile_Notification/UserContext";
import UserProfile from "./TP_Profile_Notification/UserProfile";
import Notifications from "./TP_Profile_Notification/Notifications";
import NotificationCounter from "./TP_Profile_Notification/NotificationCounter";

function AppTP() {
  return (
    <UserProvider>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1> TP : Profil Utilisateur et Notifications</h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default AppTP;
