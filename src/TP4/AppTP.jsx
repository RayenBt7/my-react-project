import  UserProvider  from "./UserProvider";
import UserProfile from "./UserProfile";
import Notifications from "./Notifications";
import NotificationCounter from "./NotificationCounter";

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
