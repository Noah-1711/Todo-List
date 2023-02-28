import './Userlist.css'
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'

export default function Userlist({addinput, setAddinput,inputarray,setInputarray,togglebtn, setTogglebtn,edititem,setEdititem}) {
    const deleteuser=(id)=>{
       const newlist=inputarray.filter((ele)=>{
       return ele.id !== id
       })
       
       setInputarray(newlist)
    }

    const edituser=(id)=>{
        console.log(id)
        const neweditlist=inputarray.find((ele)=>{
            return ele.id === id
        })
        console.log(neweditlist)
        setAddinput(neweditlist.addinput)
        setEdititem(id)


    }
    const deleteall=()=>{
    return setInputarray([])
    }
  return (
    <div className='list'>
        <div className="listcontainer">
        {inputarray.map((ele)=>{
            return(
            <><div className='listcontent'>
                <p>{ele.addinput}</p>
                <div className="crudsbuttons">
                <button onClick={()=>{
                   edituser(ele.id)
                   setTogglebtn(false)

                }}><FiEdit /> </button>
                <button onClick={()=>{
                    deleteuser(ele.id)


                }}><MdDelete /></button>
                </div>
                
                
            </div>
            </>)
        })}
     
        </div>

        <button onClick={()=>{
            deleteall()
        }}>Delete All</button>
        </div>
  )
}
