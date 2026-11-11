import { createHashRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { NotFoundPage } from "../shared/ui/common/NotFoundPage";
import { RequireRole } from "../features/auth/components/RequireRole";
import { AuthPage } from "../features/auth/pages/AuthPage";
import { ForgotPasswordPage } from "../features/auth/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "../features/auth/pages/ResetPasswordPage";
import { ResetSuccessPage } from "../features/auth/pages/ResetSuccessPage";
import { AppointmentDetailPage, AppointmentsPage, ChangeAppointmentPage } from "../features/appointments/pages/AppointmentPages";
import { ContactPage, FaqPage, AboutPage, LegalPage } from "../features/content/pages/ContentPages";
import { DashboardPage } from "../features/hospital/pages/DashboardPage";
import { AssignDoctorPage, HospitalPatientsPage } from "../features/hospital/pages/AppointmentManagementPages";
import { HospitalServicesPage, HospitalTeamPage } from "../features/hospital/pages/FacilityPages";
import { HospitalDirectoryPage, HospitalDetailsPage, BookingPage } from "../features/patient/pages/HospitalPages";
import { ProfilePage } from "../features/patient/pages/ProfilePage";
import { LandingPage } from "../features/landing/pages/LandingPage";
const router = createHashRouter([{
  element: <PublicLayout />,
  children: [{
    path: "/",
    element: <LandingPage />
  }, {
    path: "/about",
    element: <AboutPage />
  }, {
    path: "/faq",
    element: <FaqPage />
  }, {
    path: "/contact",
    element: <ContactPage />
  }, {
    path: "/privacy",
    element: <LegalPage type="privacy" />
  }, {
    path: "/terms",
    element: <LegalPage type="terms" />
  }, {
    path: "/accessibility",
    element: <LegalPage type="accessibility" />
  }]
}, {
  path: "/auth/patient/sign-in",
  element: <AuthPage role="patient" />
}, {
  path: "/auth/patient/sign-up",
  element: <AuthPage role="patient" signup />
}, {
  path: "/auth/hospital/sign-in",
  element: <AuthPage role="hospital" />
}, {
  path: "/auth/hospital/sign-up",
  element: <AuthPage role="hospital" signup />
}, {
  path: "/auth/forgot-password",
  element: <ForgotPasswordPage />
}, {
  path: "/auth/reset-password/:token",
  element: <ResetPasswordPage />
}, {
  path: "/auth/reset-success",
  element: <ResetSuccessPage />
}, {
  element: <RequireRole role="patient" />,
  children: [{
    path: "/patient",
    element: <DashboardLayout role="patient" />,
    children: [{
      index: true,
      element: <Navigate to="hospitals" replace />
    }, {
      path: "hospitals",
      element: <HospitalDirectoryPage />
    }, {
      path: "hospitals/:hospitalId",
      element: <HospitalDetailsPage />
    }, {
      path: "hospitals/:hospitalId/book",
      element: <BookingPage />
    }, {
      path: "appointments",
      element: <AppointmentsPage />
    }, {
      path: "appointments/:appointmentId",
      element: <AppointmentDetailPage />
    }, {
      path: "appointments/:appointmentId/reschedule",
      element: <ChangeAppointmentPage />
    }, {
      path: "appointments/:appointmentId/cancel",
      element: <ChangeAppointmentPage cancel />
    }, {
      path: "profile",
      element: <ProfilePage />
    }, {
      path: "profile/edit",
      element: <ProfilePage edit />
    }]
  }]
}, {
  element: <RequireRole role="hospital" />,
  children: [{
    path: "/hospital",
    element: <DashboardLayout role="hospital" />,
    children: [{
      index: true,
      element: <Navigate to="dashboard" replace />
    }, {
      path: "dashboard",
      element: <DashboardPage />
    }, {
      path: "appointments",
      element: <AppointmentsPage hospital />
    }, {
      path: "appointments/:appointmentId",
      element: <AppointmentDetailPage hospital />
    }, {
      path: "appointments/:appointmentId/assign",
      element: <AssignDoctorPage />
    }, {
      path: "patients",
      element: <HospitalPatientsPage />
    }, {
      path: "team",
      element: <HospitalTeamPage />
    }, {
      path: "services",
      element: <HospitalServicesPage />
    }, {
      path: "profile",
      element: <ProfilePage hospital />
    }, {
      path: "profile/edit",
      element: <ProfilePage hospital edit />
    }]
  }]
}, {
  path: "*",
  element: <NotFoundPage />
}]);
export default router;
