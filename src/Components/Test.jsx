import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mySchool } from './reduxSetup/Features'

const Test = () => {
    const rose= useDispatch()
    const data = "The curve Africa"
    const handleClick = ()=>{
        rose(mySchool(data))
    }
  return (
    <div>
      {/* <button onClick={handleClick}>click Me!!</button> */}
    </div>
  )
}

export default Test
