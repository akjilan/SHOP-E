import React, { useContext } from 'react'
import { MyContext } from '../Inventory/Inventory'

const TestOne = () => {
    const myName = useContext(MyContext)
  return (
    <div>
        <h3>my name is : {myName}</h3>
    </div>
  )
}

export default TestOne