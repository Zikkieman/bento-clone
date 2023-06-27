import "./dashboard.styles.scss"
import DownPane from "./down-pane-comp/down-pane";
import DashGreetings from "./greeting-component/dash-greetings.comp";
import TopPane from "./top-pane-comp/top-pane";

function DashComp (){
    return(
        <div className="dash-main-div">
           <DashGreetings />
           <TopPane />
           <DownPane />
        </div>
    )
}

export default DashComp;