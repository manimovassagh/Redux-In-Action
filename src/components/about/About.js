import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeName,showByGivenName} from '../../features/name/nameSlice'

function About() {
    
   const name= useSelector((state)=>state.name.value)
   const dispatch = useDispatch()
 
  return (
    <>
     <h2>{name}</h2>
      <button onClick={() => dispatch(changeName())}>Click</button>

      <button
          
          onClick={() =>
            dispatch(showByGivenName(String('Hasti') || 0))
          }
        >
          Give Name
        </button>
    </>
  )
}

export default About