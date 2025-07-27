import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';


function AllTask() {

  
  const authData = useContext(AuthContext);
    console.log(authData.employees)

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded  '>
     
     <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
         <h2 className='w-1/5 text-lg font-medium '>Employee name</h2>
         <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
         <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
         <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
         <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
      </div>

    <div className=''>

      {authData.employees.map((elem,index)=>{
        return    <div className='border-2 border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded'>
         <h2 className='w-1/5 text-lg font-medium'>{elem.firstname}</h2>
         <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskSummary.newTasks}</h3>
         <h5 className='w-1/5 text-lg font-medium text-yellow-300'>{elem.taskSummary.completedTasks}</h5>
         <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskSummary.activeTasks}</h5>
         <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskSummary.failedTasks}</h5>
      </div>
      })}
   
    
    </div>

        
    </div>
  )
}

export default AllTask