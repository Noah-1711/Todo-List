import './Adduser.css'
// import {GrAdd} from 'react-icons/gr'
// import {FiEdit} from 'react-icons/fi'

export default function AddUser({ addinput, setAddinput, inputarray, setInputarray, disabled, setDisabled, togglebtn, setTogglebtn,edititem,setEdititem }) {
    const addUser = () => {
        if(!togglebtn){
            
            setInputarray(
                inputarray.map((ele)=>{
                    console.log(ele)
                    if(ele.id === edititem){
                       const editedlist={...ele, addinput}
                      return editedlist
                       
                    }

                    return ele
                })
            )
            setTogglebtn(true)
            setAddinput('')

            setEdititem(null)
        }

        else{   
            
            const list = [...inputarray, { addinput: addinput, id: Date.now() }]
        setAddinput("")
        setInputarray(list)
        setDisabled(true)}
    
       

    }
    return (
        <div className='adduser'>
            <h1>Todo-List</h1>
            <div className="inputcont">
            <input type="text" value={addinput} onChange={(ele) => {
                const curvalue = ele.currentTarget.value
                if (curvalue === "") {
                    setDisabled(true)
                }
                else {
                    setDisabled(false)
                }
                setAddinput(curvalue)
            }} />

            {togglebtn ?
            <button disabled={disabled} onClick={() => {
                addUser()
            }}> Add</button>: <button  onClick={() => {
                addUser()
            }}> Edit</button>}
</div>
        </div>
    )
}
