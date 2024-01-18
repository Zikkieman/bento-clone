import { Main } from "./components/mainpage/MainComponent.js";
import { Navbar } from "./components/navbar/NavComponent.js";
import { Routes, Route, Switch } from "react-router-dom";
import SignIn from "./components/routes/Sign-In/signin.component";
import AcctType from "./components/acct-type/acct-type.component";
import SignUpForm from "./components/sign-up-form/sign-up.component";
import Dashboard from "./components/Registered-user-page/dashboard-tab/dashboard.component";
import DashComp from "./components/Registered-user-page/dashboard-tab/tab-components/dashboard-comp/dashboard.component";
import Employee from "./components/Registered-user-page/dashboard-tab/tab-components/employee-comp/employees.component";
import Payroll from "./components/Registered-user-page/dashboard-tab/tab-components/payroll-comp/payroll.component";
import Remittances from "./components/Registered-user-page/dashboard-tab/tab-components/remittances-comp/remittances.component";
import Benefit from "./components/Registered-user-page/dashboard-tab/tab-components/benefit-comp/benefit.component";
import Vault from "./components/Registered-user-page/dashboard-tab/tab-components/vault-comp/vault.component";
import PrivateRoutes from "./components/privateRoutes/private";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<Main />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="accttype" element={<AcctType />} />
        <Route path="sign-up" element={<SignUpForm />} />

        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Dashboard />}>
          <Route index path="dashboard" element={<DashComp />} />
          <Route path="employee" element={<Employee />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="remittances" element={<Remittances />} />
          <Route path="benefit" element={<Benefit />} />
          <Route path="vault" element={<Vault />} />
        </Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
