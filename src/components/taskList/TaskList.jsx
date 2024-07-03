
import {Task} from "../task/Task"
export const TaskList =({todo,onDeleted,comp})=> {

  return(
    <>
      {todo.map((el)=> <Task 
      key={el.id}
      item = {el}
      onDeleted ={()=> onDeleted(el.description) 
      } 
      comp={()=> comp(el.id)}
      
      />)}
    </>
  )
}
