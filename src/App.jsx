import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PaymentMethod from './Components/BankTransfer/PaymentMethod'
import Test from './Components/Test'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import PatientDashboard from './Components/PatientDashboard/PatientDashboard'


const route=createBrowserRouter([
  {
    path:"/",
    element:<AdminDashboard />
  },
  {
    path:"/patientDashboard",
    element:<PatientDashboard/>
  },
  {
    path:"/payment",
    element:<PaymentMethod/>
  }
])

function App() {
  return (
    <RouterProvider  router={route}/>
  )
}

export default App
