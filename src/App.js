import './App.css';
import User from './User';
import { useState } from 'react';

function App() {
  const [loading,setLoading] = useState()
  const [item,setItem] =  useState([]);
  const fun =  () =>{
    setLoading(true)
    setTimeout(fetchData,2000)
  }
  const fetchData = async () =>{
    
    try {
     
      const response = await fetch('https://reqres.in/api/users?page=2')
      const data = await response.json()
      console.log(data)
      setLoading(false)
      setItem(data.data)
    } 
    catch (error) {
      setLoading(true)
    }
    
  }
 
  if(loading){
    return (
      <div className='container' >
        <img className='loader' src="spinner.gif" alt="" />
      </div>
    ) 
  }

  return (
   <>
    
   <div className='container'>
   <User item={item} />
   </div>
   <div className='btn'>
   <button onClick={fun}>Click Me</button>
   </div>
   
   </>
  );
}

export default App;