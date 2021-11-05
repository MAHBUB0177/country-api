import React, { useState } from 'react';
import './Person.css'



const Country = (props) => {
 // console.log(props.user)
 const handelProfile=props.handelProfile;
 const { email, name, picture, gender ,location,phone} = props.user;
 const [mobile,setPhone]=useState('');

 const handelPhone =()=>{
 
 setPhone(phone)


 }
 return (
  <div className="shop-container">
   <div className="product-container">
   <img src={picture.large} alt=""></img>
   </div>
   <div className="details">
    <h1>name:{name.first + ' ' + name.last}</h1>
    <h2>Gender:{gender}</h2>
    <h2> Email:{email}</h2>
    <h2>Phone:{mobile}</h2>
    <h2> Country:{location.country}</h2>
    <button onClick={handelPhone} className="phn">show phone</button>
    <button className="btn" onClick={()=>handelProfile(props.user)}>add team</button>

   </div>

  </div>
 );
};

export default Country;