import React, { useState } from 'react'


function CreateTask() {



  const [title, settitle] = useState("")
const [description, setdescription] = useState("")
const [taskDate, settaskDate] = useState("")
const [assign, setassign] = useState("")
const [category, setcategory] = useState("")
const [task, setTask] = useState({})


  const submitHandler = (e) => {
  e.preventDefault();

  // Create task object directly
  const taskObj = {
    title,
    description,
    taskDate,
    assign,
    category,
    active: false,
    newTask: true,
    failed: true,
    completed: false
  };

  // Set state for task (if you need it elsewhere)
  setTask(taskObj);

  // Get existing employee data
  const data = JSON.parse(localStorage.getItem('employees')) || [];

  // Update the correct employee's tasks
  const updatedData = data.map(emp => {
    if (emp.firstname === assign) {
      if (!emp.tasks) emp.tasks = [];
      emp.tasks.push(taskObj);
    }
    return emp;
  });

  console.log(updatedData)

  // Save updated data back to localStorage
  localStorage.setItem('employees', JSON.stringify(updatedData));

  // Reset input fields
  settitle("");
  setdescription
("");
  settaskDate("");
  setassign("");
  setcategory("");

  console.log("Task Added:", taskObj);
};


  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e);
    }} className='flex flex-wrap w-full  items-start justify-between'>
        <div className='w-1/2'>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input value={title} onChange={(e)=>{
          return settitle(e.target.value);
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a Ui Design' />
        </div>
        <div>
       <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
       <input value={taskDate} onChange={(e)=>{
        return settaskDate(e.target.value);
       }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
       </div>

       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
       <input value={assign} onChange={(e)=>{
        return setassign(e.target.value)
       }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
       </div>

       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
       <input value={category} onChange={(e)=>{
        return setcategory(e.target.value)
       }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, Dev etc' />
       </div>
        </div>
        
        <div className='w-2/5 flex flex-col items-start'>
       <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
       <textarea value={description
} onChange={(e)=>{
        return setdescription
(e.target.value);
       }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" id="" cols="30" rows="10"></textarea>
       <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
       </div>

    </form>
</div>
  )
}

export default CreateTask




  // const [title, settitle] = useState("")
  // const [description

  // const [taskDate, settaskDate] = useState("")
  // const [assign, setassign] = useState("")
  // const [category, setcategory] = useState("")

   
  // const[task,setTask] = useState({});
 
  // const submitHandler = (e)=>{
  //    e.preventDefault();

  //    setTask({title,description
// ,taskDate,assign,category,active:false,newTask:true,failed:true,completed:false})
  //    const data = JSON.parse(localStorage.getItem('employees'))
     
  //    data.forEach(function(elem){
  //     // console.log(elem.firstname)
  //     if(assign == elem.firstname){
  //      elem.tasks.push(task)
  //     //  console.log(elem)
  //     }
  //    })

  //    localStorage.setItem("employees")
    
  //    console.log(task);
  //    settaskDate("");
  //    setassign("");
  //    settitle("");
  //    setcategory("")
  //    setdescription
  //   //  console.log(taskDate,description



  // }