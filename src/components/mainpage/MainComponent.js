import { Banner } from "../bannerpage/BannerComponent"
import { Fifth } from "../fifth-section/FifthComp"
import { Fourth } from "../fourth-section/FourthComp"
import { Navbar } from "../navbar/NavComponent"
import SecondPage from "../second-section/SecondComponent"
import "./mainStyles.css"
import {Outlet} from "react-router-dom"






export const Main = ()=>{
    return (
        <div className="main-div">
            <Outlet />
            <Banner />
            <SecondPage />
            <Fourth/>
            <Fifth/>
        </div>
    )
}