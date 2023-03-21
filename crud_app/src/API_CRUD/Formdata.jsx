import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Formdata = () => {

  const navigate=useNavigate()
const [empdata , setempdata]=useState({
  "id":"",
  "name":"",
  "city":""
})

const getname=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setempdata({...empdata,[name]:value})
}

const subdata=async(e)=>{
  e.preventDefault()
  console.log(empdata)
  const res =await axios.post(`http://localhost:3000/std`, empdata)
  console.log(res)
  navigate("/")
}



  return (
    <div>
   <div className='text-center h2 mt-5 mb-5'>Formdata</div>
   <div className='text-center'>
    <form action="" onSubmit={subdata}>
      Id: <input type="text" name="id" id="" value={empdata.id} onChange={(e)=>getname(e)} />
      Name: <input type="text" name="name" id="" value={empdata.name} onChange={(e)=>getname(e)} />
      City: <input type="text" name="city" id="" value={empdata.city} onChange={(e)=>getname(e)} />
      <button>Submit</button>
    </form>
   </div>
    </div>
  );
}

export default Formdata;
