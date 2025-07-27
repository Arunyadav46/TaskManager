import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../TaskList/TaskList'

function EmployeeDashboard({data}) {
  console.log(data);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard