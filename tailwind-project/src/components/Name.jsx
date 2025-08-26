import React from 'react'

// destructing -> props.userName -> userName by converting props into {userName} in function argument
// if props are not passed then we can set a default value by {props.property || "defaultValue"} or we can also give the default value at function argument as userName = "unknown"
function Name({userName = "universe"}) {
  return (
    <div>Name {userName || "unknown"}</div>
  )
}

export default Name