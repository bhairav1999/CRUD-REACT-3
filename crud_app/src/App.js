import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreStd from "./CONTEXT_CRUD/StoreStd";

//-----------------------------------------Crud Fakeapi------------------------------------------------------------->

// import TableFakeApi from "./FAKE_API/TableFakeApi";
// import Update from "./FAKE_API/Update";



//-----------------------------------------Crud db.Json api------------------------------------------------------------->

// import TableData from "./API_CRUD/TableData";
// import UpdateData from "./API_CRUD/UpdateData";
// import Formdata from "./API_CRUD/Formdata";



function App() {
  return (

    //-----------------------------------------Crud db.Json api------------------------------------------------------------->

    // <>
    // {/* CRUD API */}
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<TableData />}></Route>
    //       <Route path="/formadd" element={<Formdata />}></Route>
    //       <Route path="/edit/:id" element={<UpdateData />}></Route>
    //     </Routes>
    //   </Router>
    // </>


//-----------------------------------------fake api------------------------------------------------------------->

    // <>
    // {/* fake api */}
    // <Router>
    //   <Routes>
    //     <Route  path="/" element={<TableFakeApi/>}/>
    //     <Route  path="/edit/:id" element={<Update/>}/>

        
    //   </Routes>
    // </Router>
      
    // </>
// -------------------------Context -------------------------------------------------------------------------->
<>

  <StoreStd/>
</>


  );
}

export default App;
