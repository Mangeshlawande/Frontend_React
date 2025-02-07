import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-slate-700 p-5 text-black text-3xl text-center py-5m font-semibold'>User : {userid}</div>
  )
}

export default User