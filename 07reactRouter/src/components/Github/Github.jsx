import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center  bg-gray-600 text-white p-4 text-3xl'>Github 
    public_repos
    : {data.
public_repos
}
   <div className="flex items-center justify-center p-5"> <img className=' p-3 bg-gray-800 rounded-lg' src={data.avatar_url} width={300} alt="" /></div>
   <div className="flex items-center justify-center p-5"> <a href={data.blog}>Visit channnel</a></div>
   <p > Name : {data.name}</p>
   <p > Location : {data.location}</p>
   <p className='text-2xl'> bio : {data.bio}</p>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const response = await fetch('https://api.github.com/users/Mangeshlawande')
   const data =  await response.json()
   console.log("data", data);
   
    return data
}

