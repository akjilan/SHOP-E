import React, { useContext } from 'react'
import Test from '../Tests/Test'
import { MyAgeContext } from '../Inventory/Inventory'


const TestTwo = () => {
    const [age,setAGe] = useContext(MyAgeContext);

  return (
    <div>
        <Test></Test>
        <h2>Here the current age is : {age}</h2>
        <button onClick={()=>setAGe(age+1)} className='inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-lg mt-3 mr-4'>increment</button>
        <button onClick={()=>setAGe(age-1)} className='inline-block px-4 py-2 bg-gray-500 text-white font-bold rounded-lg'>Decrement</button>
       
    </div>
  )
}

export default TestTwo