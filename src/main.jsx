import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { thisIsOurStore } from './Components/reduxSetup/Store.jsx'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const myPersistor = persistStore(thisIsOurStore);
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
   <Provider store={thisIsOurStore}>
    <PersistGate loading={null} persistor={myPersistor}>
      <App />
    </PersistGate>
   </Provider>
  </React.StrictMode>
)
