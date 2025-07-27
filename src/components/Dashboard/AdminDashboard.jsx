import React, { useContext } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

function AdminDashboard(props) {

  

  return (
    <div className='w-full h-screen p-10' >
         <Header changeUser = {props.changeUser} />
         <CreateTask/>
         <AllTask/>
    </div>
  )
}

export default AdminDashboard