import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data, setData] = useState('')
    // const url = 'https://api.github.com/users/uditns'
    // useEffect(() => {
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // }, [])
    const data = useLoaderData();

return (
    <>
        <div>Github followers : {data.followers}</div>
        <img src={`${data.avatar_url}`} alt="" />
    </>
)
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/uditns')
    return response.json()
}