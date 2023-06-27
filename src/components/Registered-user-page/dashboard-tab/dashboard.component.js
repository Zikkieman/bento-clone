import { Outlet } from "react-router-dom";
import DashNav from "./dashboard-navbar/navBoard.component";
import "./dashboard.styles.scss";




function Dashboard ({currentUser}){
    console.log(currentUser)
    return(
        <div>
            <DashNav />
            <Outlet />
        </div>
    )
}


export default Dashboard;