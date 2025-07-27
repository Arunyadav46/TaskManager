import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
 
  useEffect(() => {
  // Check if employees are already in localStorage
  if (!localStorage.getItem("employees")) {
    setLocalStorage();  // Only set default data if nothing exists
  }

  getLocalStorage();  // Always get the existing data
}, []);



const[user,setuser] =  useState("")
const[loggedInUserData,setloggedInUserData] = useState("")
console.log(loggedInUserData);
const authData = useContext(AuthContext)
// console.log(authData.employees);


useEffect(()=>{
   const loggedInUser = localStorage.getItem("loggedInUser");
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    // console.log(userData)
    setuser(userData.role)
    setloggedInUserData(userData.data)

   }
},[])



const handleLogin = (email,password)=>{
   if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   }
   else if(authData){
       const employee = authData.employees.find((elem)=>email==elem.email && elem.password == password);
       console.log(employee);

      if(employee){
          setuser('employee')
          setloggedInUserData(employee);
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }

      // console.log(user);
   }
   else{
    alert("invalid credientls")
   }
}



  return (
    <div>
      {!user?<Login handleLogin={handleLogin}/>:""}
      {user == 'admin'?<AdminDashboard changeUser={setuser}/>: (user=='employee'?<EmployeeDashboard changeUser={setuser}  data={loggedInUserData}/>:null)}
      
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App