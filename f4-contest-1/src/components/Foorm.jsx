import React, { useState } from 'react';
import googlePic from '../images/google.png';
import facebook from '../images/facebook.png';
import Socials from './Socials';

const Form=()=>{

const [userinfo,setUserInfo]=useState({username:'',email:'',password:'',cnfPassword:''});

const [error,setError]=useState('');
const [success,setSuccess]=useState('');

function createAccount(event){
event.preventDefault();
console.log(userinfo);
if(userinfo.username.length<3 || userinfo.username.length>30){
   setError('Error: Name should be min 3 char and max 30 char');
   setSuccess('');
}
else if(!userinfo.email.includes('@') || !userinfo.email.includes('.')){
   setError('Error: Email should contain @ and .');
   setSuccess('');
}
else if(userinfo.password.length<8 || userinfo.password.length>15){
   setError('Error: Password should be min 8 char and max 15 char')
   setSuccess('');
}
else if(userinfo.cnfPassword!==userinfo.password){
   setError('Error: Please Make sure your passwords and confirm passwords match!')
   setSuccess('');
}
else {
   setSuccess('Successfully Created!');
   setError('');
   setUserInfo({username:'',email:'',password:'',cnfPassword:''});
}
}


    return (
      <div className='form-section'>
        <h1>Create Account</h1>
        <div className="socials-section">
           <Socials text="Sign up with Google" src={googlePic}/>
           <Socials text="Sign up with Facebook" src={facebook}/>
        </div>
         <p>-OR-</p>
         <form >
            <section>
                <input type="text" placeholder='Full Name' onChange={(event)=>setUserInfo({...userinfo,username:event.target.value})} value={userinfo.username}/>
            </section>
            <section>
                <input type="email" placeholder='Email Address' onChange={(event)=>setUserInfo({...userinfo,email:event.target.value})} value={userinfo.email}/>
            </section>
            <section>
                <input type="password" placeholder='Password' onChange={(event)=>setUserInfo({...userinfo,password:event.target.value})} value={userinfo.password}/>
            </section>
            <section>
                <input type="password" placeholder='Confirm Password' onChange={(event)=>setUserInfo({...userinfo,cnfPassword:event.target.value})} value={userinfo.cnfPassword}/>
            </section>
            <button type='submit' onClick={createAccount}>Create Account</button>
         </form>
         <div className="message-section">
          {error && <p style={{color:'#FE597B'}}>{error}</p>}
          {success && <p style={{color:'#7CD2D7'}}>{success}</p>}
         </div>
      </div>
    );
}

export default Form;