import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({children}) {
 
    const[userData,setuserData] = useState([])

   
    useEffect(()=>{
      const{employees,admin} = getLocalStorage();
      setuserData({employees,admin})
    },[])

    


    // const data = getLocalStorage();
    // console.log(data)

  return (
    <div> 
        <AuthContext.Provider value={userData}>
           {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider