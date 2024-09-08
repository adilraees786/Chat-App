
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../database/firebase.config';

const SignupPage = () => {
  
  const [name, setname] = useState("s");
  const [email, setemail] = useState("s"); // email for read & set email for write in useState
  const [password, setpassword] = useState("v");



function handlesignup(e){
  e.preventDefault();
  console.log(name, "name");
  console.log(email, "email");
  console.log(password, "password");
 

  createUserWithEmailAndPassword(auth, email, password)
  .then((respnse) => {
    // Signed up 
    const user =respnse.user;
    console.log(user ,"??? user");
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorMessage, " ??? error message");
    // ..
  });
  
}


  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form data submitted:', formData);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg scale-125		">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {/* <form onSubmit={handleSubmit}> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Full Name
            </label>
            <input
              // id="name"
              // name="name"
              type="text"
              placeholder="Enter your Name"
              // value={formData.username}
              onChange={e => setname(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              // id="email"
              // name="email"
              type="email"
              placeholder='Enter your email'
              // value={formData.email}
              onChange={e => setemail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              // id="password"
              // name="password"
              type="password"
              placeholder='Enter your password'
              // value={formData.password}
              onChange={e => setpassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handlesignup}
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        {/* </form> */}

        <div className='mt-6 text-center flex justify-between'>
          <a 
          className='text-sm  text-indigo-900 hover:text-indigo-950'
           href="signup">
          signup?
          </a>

          <a 
          className='text-sm  text-indigo-900 hover:text-indigo-950'
           href="signup">
          forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

        
