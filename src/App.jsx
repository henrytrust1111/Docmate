import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import PaymentMethod from "./Components/BankTransfer/PaymentMethod";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import PatientDashboard from "./Components/PatientDashboard/PatientDashboard";
import Body from "./Components/LandingPage/Body";
import PatientRegister from "./Components/Onboarding/PatientRegister";
import PatientLogin from "./Components/Onboarding/PatientLogin";
import HospitalLogin from "./Components/Onboarding/HospitalLogin";
import HospitalRegister from "./Components/Onboarding/HospitalRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/patientLogin" element={<PatientLogin />} />
        <Route path="/hospitalLogin" element={<HospitalLogin />} />
        <Route path="/hospitalRegister" element={<HospitalRegister />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment" element={<PaymentMethod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const route=createBrowserRouter([
//   {
//     path:"/",
//     element:<AdminDashboard />
//   },
//   {
//     path:"/patientDashboard",
//     element:<PatientDashboard/>
//   },
//   {
//     path:"/payment",
//     element:<PaymentMethod/>
//   }
// ])

// function App() {
//   return (
//     <RouterProvider  router={route}/>
//   )
// }

// export default App
