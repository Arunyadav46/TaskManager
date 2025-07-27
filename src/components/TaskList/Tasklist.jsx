import React from 'react'
import AcceptTast from './AcceptTast'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


function Tasklist({data}) {
     console.log(data)
  return (
    <div id="tasklist" className='w-full h-[55%]   mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
   {data.tasks.map((elem,index)=>{
     if(elem.active){
      return   <AcceptTast data={elem}/>
     }
     if(elem.newTask){
      return  <NewTask data={elem}/>
     }
     if(elem.completed){
       return <CompleteTask data={elem}/>
     }
     if(elem.failed){
      return <FailedTask data={elem}/>
     }
   })}
   
    {/*<NewTask/>
    <CompleteTask/>
    <FailedTask/> */}
    </div>
  )
}
export default Tasklist