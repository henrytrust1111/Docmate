import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  HashRouter,
  createHashRouter,
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
import PatientLogin2 from "./Components/Onboarding/PatientLogin2";
import PatientLeftNav from "./Components/PatientDashboard/PatientLeftNav";
import PatientHospitalSelection from "./Components/PatientDashboard/PatientHospitalSelection";
import PatientHospitalPage from "./Components/PatientDashboard/PatientHospitalPage";
import PatientAppointmentForm from "./Components/PatientDashboard/PatientAppointmentForm";
import PatientProfilePage from "./Components/PatientDashboard/PatientProfilePage";
import PatientPayment from "./Components/PatientDashboard/PatientPayment";
import PatientAppointmentReview from "./Components/PatientDashboard/PatientAppointmentReview";
import AdminRightNav from "./Components/Dashboard/AdminRightNav";
import AdminAppointmentReview from "./Components/Dashboard/AdminAppointmentReview";
import AdminAssignDoctor from "./Components/Dashboard/AdminAssignDoctor";
import AdminBookingReview from "./Components/Dashboard/AdminBookingReview";
import AdminPayment from "./Components/Dashboard/AdminPayment";
import AdminPatientView from "./Components/Dashboard/AdminPatientView";
import AdminProfile from "./Components/Dashboard/AdminProfile";
import AdminRescheduleReview from "./Components/Dashboard/AdminRescheduleReview";
import AdminProfileUpdate from "./Components/Dashboard/AdminProfileUpdate";
import PatientProfileUpdate from "./Components/PatientDashboard/PatientProfileUpdate";
import SetNewPasswordHospital from "./Components/Setnewpassword/SetNewPasswordHospital";
import Enteremail from "./Components/EnterMailPage/Enteremail";
import { Toaster } from "react-hot-toast";
import Blog from "./Components/BlogPage/Blog";

const route = createHashRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/patient",
    element: <PatientDashboard />,
    children: [
      {
        path: "/patient",
        element: <PatientHospitalSelection />,
      },
      {
        path: "/patient/patientHospitalPage",
        element: <PatientHospitalPage />,
      },
      {
        path: "/patient/patientHospitalPage/patientAppointmentForm",
        element: <PatientAppointmentForm />,
      },
      {
        path: "/patient/patientProfilePage",
        element: <PatientProfilePage />,
      },
      {
        path: "/patient/patientProfileUpdate",
        element: <PatientProfileUpdate />,
      },
      {
        path: "/patient/patientAppointmentReview",
        element: <PatientAppointmentReview />,
      },
    ],
  },

  {
    path: "/contactUs",
    element: <Contactus />,
  },
  {
    path: "/enterEmail",
    element: <Enteremail />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/aboutUs",
    element: <Aboutus />,
  },
  {
    path: "/faq",
    element: <Faqpage />,
  },
  {
    path: "/setPassword",
    element: <Setnewpassword />,
  },
  {
    path: "/setPasswordHospital",
    element: <SetNewPasswordHospital />,
  },
  {
    path: "/passwordReset",
    element: <Passwordresetsuc />,
  },
  {
    path: "/patientRegister",
    element: <PatientRegister />,
  },
  {
    path: "/patientLogin",
    element: <PatientLogin />,
  },
  {
    path: "/hospitalLogin",
    element: <HospitalLogin />,
  },
  {
    path: "/hospitalRegister",
    element: <HospitalRegister />,
  },
  {
    path: "/patientAppointment/:id",
    element: <PatientLogin2 />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin",
        element: <AdminRightNav />,
      },
      {
        path: "/admin/adminAppointmentReview",
        element: <AdminAppointmentReview />,
      },
      {
        path: "/admin/adminAppointmentReview/adminAssignDoctor",
        element: <AdminAssignDoctor />,
      },
      {
        path: "/admin/adminAppointmentReview/adminAssignDoctor/bookingReview",
        element: <AdminBookingReview />,
      },
      {
        path: "/admin/adminPatientView",
        element: <AdminPatientView />,
      },
      {
        path: "/admin/adminPayment",
        element: <AdminPayment />,
      },
      {
        path: "/admin/adminProfile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/adminProfileUpdate",
        element: <AdminProfileUpdate />,
      },
      {
        path: "/admin/adminRescheduleReview",
        element: <AdminRescheduleReview />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/contactUs" element={<Contactus />} />
//         <Route path="/aboutUs" element={<Aboutus />} />
//         <Route path="/faq" element={<Faqpage />} />
//         <Route path="/setPassword" element={<Setnewpassword />} />
//         <Route path="/passwordReset" element={<Passwordresetsuc />} />
//         <Route path="/patientRegister" element={<PatientRegister />} />
//         <Route path="/patientLogin" element={<PatientLogin />} />
//         <Route path="/hospitalLogin" element={<HospitalLogin />} />
//         <Route path="/hospitalRegister" element={<HospitalRegister />} />
//         <Route path="/dashboard" element={<PatientDashboard />} />
//         <Route path="/patient" element={<PatientDashboard />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/payment" element={<PaymentMethod />} />
//         <Route path="/patientAppointment/:id" element={<PatientLogin2 />} />
//       </Routes>
//
//     </HashRouter>
//   );
// }

// export default App;

// {
//   path: "/",
//   errorElement: <ErrorPage />,
//   element: <DashboardLayout />,
//   children: [
//       {
//           path: "/:merchants/",
//           element: <Stores />,
//       },
//       {
//           path: ":merchants/:stores",
//           element: <Dashboard />,
//       },
//       {
//           path: ":merchants/:stores/dashboard",
//           element: <Dashboard />,
//       },
//       {
//           path: ":merchants/:stores/products",
//           element: <Products />,
//       },
//       {
//           path: ":merchants/:stores/orders",
//           element: <Orders />,
//       },
//       {
//           path: ":merchants/:stores/customers",
//           element: <Customers/>,
//       },
//       {
//           path: ":merchants/:stores/customers/order-history",
//           element: <OrderHistory/>,
//       },
//       {
//           path: ":merchants/:stores/support",
//           element: <Support />,
//       },
//       {
//           path: ":merchants/:stores/settings",
//           element: <StoresSettings />,
//       },
//       {
//           path: ":merchants/settings",
//           element: <Settings />,
//       },
//   ],
// },
