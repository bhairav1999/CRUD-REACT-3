import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const TableData = () => {
  const [showdata, setshowdata] = useState([]);


const getshowdata=async()=>{
  const res =await axios.get("http://localhost:3000/std")
  console.log(res)
  setshowdata(res.data)
}
useEffect(()=>{
  getshowdata()
},[])

const deletedata= async(id)=>{
  console.log(id)
    const result =await axios.delete(`http://localhost:3000/std/${id}`)
    console.log(result)
    getshowdata()
}


  return (
    <>
      <div className="text-center h3 mt-5 ">Tabledata</div>
      <div className="text-center mb-5 mt-5 ">
        <Link to="/formadd">
          <button className="btn-primary">Add Data</button>
        </Link>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showdata.length > 0 &&
              showdata.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td><button onClick={()=>deletedata(e.id)}>Delete</button>
                   <Link to= {`/edit/:${e.id}`}>
                   <button>Edit</button>
                   </Link>
                   </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
