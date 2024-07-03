import { useState } from "react"




export  const Task =({item,onDeleted,comp}) =>{
const [con,getCon] = useState(null)
  const click =()=>{
     !item.stateCompleted ?getCon('gg') : getCon(null)
  }

      return(
        <>
  <li className="completed ">
    <div className="view">
      <input className="toggle " type="checkbox" onChange={click }  onClick={comp}/>
      <label  className={con}>
        <span className= "description "  >{item.description}</span>
        <span className="created">{item.created}</span>                
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
  </li>
  
  </>
) 
  }
  