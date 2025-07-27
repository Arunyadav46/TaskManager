import React from 'react'

function NewTask({data}) {
  return (
    <div className='h-full w-[300px] bg-blue-500 rounded-xl flex-shrink-0 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                    <h4 className='tx-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
               <div className='mt-4'>
                  <button className='w-full bg-red-300 rounded-md'>New Task</button>
               </div>


          </div>
  )
}

export default NewTask