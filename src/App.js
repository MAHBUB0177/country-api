import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './person/Country';
import Profile from './person/Profile';





function App() {
  const number=['mahbub','alam','robi','gramin']


  const [person, setPerson] = useState([]);
  const[count,setCount] =useState([])
  
  const handelProfile=(man) =>{
    console.log('test')
    setCount(man)

  }

  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res =>res.json())
    .then(data=>setPerson(data.results))
  },[]);


  return (
    <div className="main">
      
     <div className="person">
      {
        person.map(person=><Country  user={person}
           handelProfile={handelProfile} />)
      }
      </div>
      <div className="cart">
       <Profile  userName={count}/>
      </div>
    

    </div>
  );
}

export default App;
