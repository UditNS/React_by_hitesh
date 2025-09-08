import { useState, useEffect } from 'react'
import { Header, Footer } from './components'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login } from './store/authSlice'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()  
  
  // as application loads -> take a useEffect and ask whether the user is logged in or not
  useEffect(() => {
    authService.getUserAccount()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='flex flex-wrap min-h-screen w-full items-center justify-center bg-green-500'>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
