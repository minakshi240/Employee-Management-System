import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    }

  }, [authData])
  

  const handleLogin = (email,password)=> {
    if(email == 'admin@me.com' && password =='123'){
      setUser('admin')
      
    }else if(authData && authData.employees.find((e)=> email == e.id && password == e.password)){
      setUser('employee')
    }else{
      alert("Invalid Credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)

  {/* useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, []) */}

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: '' }
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
