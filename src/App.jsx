import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  HashRouter,
} from "react-router-dom";
import "./App.css";
import Passwordresetsuc from "./Components/Passwordresestsuccesspage/Passwordresetsuc";
import Contactus from "./Components/Contactuspage/Contactus";
import PaymentMethod from "./Components/BankTransfer/PaymentMethod";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import PatientDashboard from "./Components/PatientDashboard/PatientDashboard";
import Body from "./Components/LandingPage/Body";
import PatientRegister from "./Components/Onboarding/PatientRegister";
import PatientLogin from "./Components/Onboarding/PatientLogin";
import HospitalLogin from "./Components/Onboarding/HospitalLogin";
import HospitalRegister from "./Components/Onboarding/HospitalRegister";
import Aboutus from "./Components/AboutUspage/Aboutus";
import Faqpage from "./Components/Faqpage/Faqpage";
import Setnewpassword from "./Components/Setnewpassword/Setnewpassword";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/setPassword" element={<Setnewpassword />} />
        <Route path="/passwordReset" element={<Passwordresetsuc />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/patientLogin" element={<PatientLogin />} />
        <Route path="/hospitalLogin" element={<HospitalLogin />} />
        <Route path="/hospitalRegister" element={<HospitalRegister />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment" element={<PaymentMethod />} />
      </Routes>
      <Toaster/>
    </HashRouter>
  );
}

export default App;
