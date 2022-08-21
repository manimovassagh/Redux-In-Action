import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeStat} from '../features/statistik/statSlice'



function Statistik() {
    const dispatch = useDispatch()
    const statistik=useSelector((state)=>state.stat.value)
  return (
    <>
   <button onClick={() => dispatch(changeStat())}>Change Stat</button>
    <h1>Statistik {statistik}</h1>
    </>
  )
}

export default Statistik