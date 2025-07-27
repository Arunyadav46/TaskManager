import React, { useEffect, useState } from 'react'


function Header({data}) {
 
 const[user1,setuser1] =  useState(" ");
 
 useEffect(() => {
    if (!data) {
      setuser1('Admin');
    } else {
      setuser1(data.firstname);
    }
  }, [data]);

  const logout = ()=>{
     localStorage.setItem('loggedInUser','')
     
    //  changeUser('')
     window.location.reload();
  }

  return (
    <div className='flex items-center items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>{user1} ✋</span></h1>
        <button onClick={logout} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}
export default Header