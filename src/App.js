import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Userlist from './Components/Userlist';


function App() {
  const [addinput, setAddinput] = useState("")
  const [inputarray, setInputarray] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [togglebtn, setTogglebtn] = useState(true)
  const [edititem, setEdititem] = useState(null)

  return (
    <div className="App">
      <AddUser 
      addinput={addinput} 
      setAddinput={setAddinput}
       inputarray={inputarray} 
       setInputarray={setInputarray} 
       disabled={disabled} 
       setDisabled={setDisabled}
       togglebtn={togglebtn}
       setTogglebtn={setTogglebtn}
       edititem={edititem}
       setEdititem={setEdititem}/>

    <Userlist addinput={addinput} 
      setAddinput={setAddinput} inputarray={inputarray} setInputarray={setInputarray}  togglebtn={togglebtn}
       setTogglebtn={setTogglebtn}  edititem={edititem}
       setEdititem={setEdititem}/>
    </div>
  );
}

export default App;
