import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>Home {count}</div>
  )
}

export default Home
