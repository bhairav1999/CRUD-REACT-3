import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const TableFakeApi = () => {

const [show , setShow]=useState([])

const getshowdata= async()=>{
    const res =await axios.get("https://dummyjson.com/products")
    console.log(res.data);
    setShow(res.data.products)
}


useEffect(()=>{
    getshowdata()  
},[])


const deletedata= async(id)=>{
    const res =await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(res.data);
}






  return (
    <div className='container'>
      
<table className='table mt-5'>
    <thead>
        <tr>
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        {
            show.length > 0 && show.map((element,index)=>{
                return (
                    <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.description}</td>
                        <td>
                        
                        <Link to={`/edit/:${element.id}`}><button>Edit</button></Link>
                        
                        
                        <button onClick={()=>deletedata(element.id)}>Delete</button></td>

                    </tr>
                )
            })
        }
    </tbody>
</table>





    </div>
  )
}

export default TableFakeApi
