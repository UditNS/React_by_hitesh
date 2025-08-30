import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

//what is children here?
// children is a special prop that represents whatever you wrap inside a component.
{/* <UserContextProvider>
   <Navbar />
   <Profile />
</UserContextProvider> 

here children = <Navbar /> <Profile />
So in your provider, {children} means "render all the child components inside this provider".


⚡ In Short:

Context = Global data store (avoids prop drilling).

UserContext = The context object.

UserContextProvider = Wraps children and provides user + setUser.

children = Whatever components you place inside this provider.

*/}

export default UserContextProvider