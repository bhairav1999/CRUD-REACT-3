
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { msgcontext } from './StoreStd';


const FormStdData = () => {


const {getstddata}=useContext(msgcontext)

  const navigate=useNavigate()
const [empdata , setempdata]=useState({
  "id":"",
  "name":"",
  "mobile":""
})

const getname=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setempdata({...empdata,[name]:value})
}

const subdata=(e)=>{
  e.preventDefault()
  console.log(empdata)
  getstddata(empdata)
  navigate("/")
}



  return (
    <div>
   <div className='text-center h2 mt-5 mb-5'>FormStdData</div>
   <div className='text-center'>
    <form action="" onSubmit={subdata}>
      Id: <input type="text" name="id" id="" value={empdata.id} onChange={(e)=>getname(e)} />
      Name: <input type="text" name="name" id="" value={empdata.name} onChange={(e)=>getname(e)} />
      Mobile: <input type="text" name="mobile" id="" value={empdata.mobile} onChange={(e)=>getname(e)} />
      <button>Submit</button>
    </form>
   </div>
    </div>
  );
}

export default FormStdData;
