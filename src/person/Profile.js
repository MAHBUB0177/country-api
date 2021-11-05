import React from 'react';

const Profile = (props) => {
 const user=props.userName;

  console.log(user)

 const {gender,picture,name,phone,email}=user;

 return (
  <div>
   <h1>User Profile</h1>
   <hr/>
   {/* <img src={picture.large} alt=""></img> */}
   {/* <h1>name:{name.first + ' ' + name.last}</h1> */}
   <h2>Gender:{gender}</h2>
   <h2>Phone:{phone}</h2>
   <h2>Email:{email}</h2>
   
   
   
   
   
  </div>
 );
};

export default Profile;