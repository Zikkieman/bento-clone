import { Below } from "../Tab/BelowSecComp";
import BasicTabs from "../Tab/TabComponent";
import "./SecondStyles.css"




function SecondPage() {
  return (
    <div className="sec-main-div">
      <div className="sec-page-header-div">
        <h1 className="sec-page-headword">Modern Payroll & HRM solutions for Africa</h1>
        <p className="sec-page-p">
          Our products are simplifying payroll & HRM, period. Whether you are a
          big multi-national, a small bakery, trying to manage your domestic
          staff, or a freelancer. There’s a Bento product for you.
        </p>
      </div>
      <BasicTabs />
      <Below />
    </div>
  );
}

export default SecondPage;
