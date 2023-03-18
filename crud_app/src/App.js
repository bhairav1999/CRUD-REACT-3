import "./App.css";


import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import TableData from "./Components/TableData";

import UpdateData from "./Components/UpdateData";
import Formdata from "./Components/Formdata";

function App() {
  return (
   
<Router>
  <Routes>
<Route path="/" element={<TableData/>} ></Route>
<Route path="/formadd" element={<Formdata/>} ></Route>
<Route path="/edit/:id" element={<UpdateData/>} ></Route>


  </Routes>
</Router>







   
  )
}

export default App;
