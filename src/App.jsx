import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PaymentMethod from './Components/BankTransfer/PaymentMethod'
import Test from './Components/Test'
import AdminDashboard from './Components/Dashboard/AdminDashboard'


const route=createBrowserRouter([
  {
    path:"/",
    element:<AdminDashboard />
  },
  {
    path:"/Payment",
    element:<PaymentMethod/>
  }
])
function App() {
  return (
    <RouterProvider  router={route}/>
  )
}

export default App
