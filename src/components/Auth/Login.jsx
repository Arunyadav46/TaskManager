// import React, { useState } from 'react'

// function Login({handleLogin}) {

//     //two way binding

//    const[email,setemail] =  useState("");
//    const[password,setpassword] =  useState("");
   
//     const submitHandler = (e)=>{
//          e.preventDefault();
//          handleLogin(email,password)

//          setemail("")
//          setpassword("")
//     }

//   return (
//     <div className='w-full h-screen flex items-center justify-center'>
//         <div className='border-2 border-embraled-500 p-20 rounded-xl'>
//             <form onSubmit={(e)=>{
//                 submitHandler(e)
//             }} className='flex flex-col items-center justify-center gap-3'>
//                 <input value={email} onChange={(e)=>{
//                     return setemail(e.target.value)
//                 }}  required className='border-2 border-emerald-600 rounded-full px-3 py-1 text-xl outline-none bg-transparent text-white placeholder:text-zinc-400' type="email" placeholder='Enter your email'/>
//                 <input value={password} onChange={(e)=>{
//                     return setpassword(e.target.value)
//                 }}  required className='border-2 border-emerald-600 rounded-full px-3 py-1 text-xl outline-none bg-transparent text-white placeholder:text-zinc-400' type="password" placeholder='Enter your password' />
//                 <button className=' bg-emerald-600 rounded-full px-4 py-2 w-full hover:bg-emerald-400 text-xl outline-none border-none text-white placeholder:text-zinc-300 mt-3'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login



import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../Utils/localStorage';



function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userOptions, setUserOptions] = useState([]);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    const combinedUsers = [
      ...admin.map(user => ({ name: 'Admin', email: user.email })),
      ...employees.map(user => ({ name: user.firstname, email: user.email }))
    ];
    setUserOptions(combinedUsers);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  const handleSelect = (e) => {
    const selectedEmail = e.target.value;
    setEmail(selectedEmail);
    setPassword('123'); // default password
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white">
      <div className="border-2 border-emerald-500 rounded-md p-10 w-full max-w-md shadow-xl shadow-emerald-900">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome back!</h2>
        <p className="text-center text-zinc-400 mb-6 text-sm">
          Please enter pre-defined details to sign in.
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E.g, admin@me.com"
              className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent rounded-md text-white placeholder:text-zinc-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Default Password:- 123"
              className="w-full px-4 py-2 border-2 border-emerald-600 bg-transparent rounded-md text-white placeholder:text-zinc-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md font-semibold"
          >
            Log In
          </button>

          <select
            onChange={handleSelect}
            className="w-full px-4 py-2 border-2 border-emerald-600 bg-black rounded-md text-white placeholder:text-zinc-500 outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Predefined Login Ids
            </option>
            {userOptions.map((user, index) => (
              <option key={index} value={user.email} className="text-blac ">
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default Login;
