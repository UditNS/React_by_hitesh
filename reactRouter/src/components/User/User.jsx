import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {uditId} = useParams() // this is need to import the uditId
return (
    <div>User: {uditId}</div> // Jo bhi maine main.jsx me user/: ke baad likha hai vahi same yaha pe bhi likha padega(Most important)
)
}

export default User