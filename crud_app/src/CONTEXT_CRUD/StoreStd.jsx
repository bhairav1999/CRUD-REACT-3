import React, { createContext, useState } from 'react';
import App from '../App';
import Routing from './Routing';

export const msgcontext=createContext()

const StoreStd = () => {

const [showdata , setShowdata]=useState([])


const getstddata=(data)=>{
   console.log(data)
   setShowdata([...showdata,data])
}

//  delete data

const deletestddata=(dle)=>{
console.log(dle)

const res =showdata.filter((e)=>e.id !== dle)
setShowdata(res)


}


  return (
    <div>
      <msgcontext.Provider value={{showdata,getstddata,deletestddata}}>
        <Routing/>
      </msgcontext.Provider>
    </div>
  );
}

export default StoreStd;
