import React from 'react'
import { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {


    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const database = [
        {
          username: "nazrin",
          password: "nazrin99"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];

      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

      const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
      const renderForm = (
        <div className="form  ">
          <form onSubmit={handleSubmit}>
            <div className="input-container mb-[20px]">
              <input  type="text" name="uname" required  placeholder='name' className='border-[#144272] border-2 px-[20px] cursor-pointer outline-0 rounded-xl font-sans sm:w-[230px] lg:w-[360px] h-[65px]'/>
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <input type="password" name="pass" required placeholder='*****' className='border-[#144272] border-2 px-[20px] cursor-pointer outline-0 rounded-xl font-sans sm:w-[230px] lg:w-[360px] h-[65px]'/>
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input className=' rounded-xl sm:w-[230px] lg:w-[360px] p-[5px]  bg-[#EB6440]  h-[65px] text-white font-sans mt-[50px] hover:bg-[#e8552e]' type="submit" />
            </div>
          </form>
        </div>
      );
    

  return (
      <div>
                <Header/>
                <div className='w-[600px] bg-white border-[#144272] border-4  h-[800px] rounded-2xl  mx-auto my-[100px]  '>
          <div className="app ">
      <div className="login-form text-center">
        <div className="title text-5xl font-serif text-[#144272]  font-bold py-[80px] text-center">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
    <Footer/>
      </div>
 
  )
}

export default Login
