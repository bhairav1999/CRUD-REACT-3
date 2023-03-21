import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { msgcontext } from './StoreStd';


const TabledataStd = () => {
    const {showdata,deletestddata}=useContext(msgcontext)
  return (
    <div>
      <div className='text-center mt-5'>
       <Link to={"/formadd"}> <button className='btn-danger'>Add Data</button></Link>
      </div>

  <div className='container mb-5 mt-5'>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {
                showdata.map((element,index)=>{
                    return (
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.mobile}</td>
                            <td><button onClick={()=>deletestddata(element.id)}>delete</button></td>
                            
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  </div>

    </div>
  );
}

export default TabledataStd;
