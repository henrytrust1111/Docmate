import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PaymentMethod from './Components/BankTransfer/PaymentMethod'
import Test from './Components/Test'


const route=createBrowserRouter([
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
