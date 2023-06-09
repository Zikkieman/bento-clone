import { Main } from "./components/mainpage/MainComponent";
import { Navbar } from "./components/navbar/NavComponent";
import {Routes, Route} from 'react-router-dom'
import SignIn from "./components/routes/Sign-In/signin.component";
import AcctType from "./components/acct-type/acct-type.component";
import SignUpForm from "./components/sign-up-form/sign-up.component";


// const SignIn = () => {
//     return (
//         <div>
//             <h1> Login Here</h1>
//         </div>
//     )
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={< Main />} />
        </Route>
        <Route path="sign-in" element={< SignIn />} />
        <Route  path="accttype" element={<AcctType/>}/>
        <Route path="sign-up" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
