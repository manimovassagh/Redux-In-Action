import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

// Some items For git showup
function Home() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>Home {count}</div>
  )
}

export default Home
