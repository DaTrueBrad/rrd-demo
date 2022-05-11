import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Brady from './Brady'
import Andrew from './Andrew'

const Team = () => {
  return (
    <div>
      <h1>Team Page</h1>
      <div>
        <Link to="/team/brady">Brady</Link>
        <Link to="/team/andrew">Andrew</Link>
      </div>
      <Routes>
        <Route path="brady" element={<Brady />} />
        <Route path="andrew" element={<Andrew />} />
      </Routes>
    </div>
  )
}

export default Team