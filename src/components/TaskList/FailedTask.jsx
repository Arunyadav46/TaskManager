import React from 'react'

function FailedTask({data}) {
  return (
    <div className='h-full w-[300px] bg-red-500 rounded-xl flex-shrink-0 p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='tx-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
  <div className='mt-2'>
    <button className='w-full'>Failed</button>
  </div>
</div>
  )
}

export default FailedTask