import React from 'react'
import { useSelector } from 'react-redux'

const PaymentMethod = () => {
    const wahala= useSelector(state=>state.Henry.school)
    const key= Math.random()
    console.log(key);
    function payKorapay() {
      window.Korapay.initialize({
          key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
          reference: "",
          amount: 22000, 
          currency: "NGN",
          customer: {
            name: "John Doe",
            email: "john@doe.com"
          },
          notification_url: "https://example.com/webhook"
      });
  }

  return (
    <div>
      <div>
      <input type="text" placeholder='name' />
      <input type="text" placeholder='amount' />
      <input type="text" placeholder='quantity' />
      <input type="text" placeholder='reason' />
      <button type="button" onClick={payKorapay}> Pay </button>
      </div>
    </div>
  )
}

export default PaymentMethod
