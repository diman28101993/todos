

export const Footer =({btnAll,btnCompleted,btnClearAll,btnActive})=>{

    return(
        <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          <li>
            <button className="selected"  onClick={btnAll}>All</button>
          </li>
          <li>
            <button className="active" onClick={btnActive}>Active</button>
          </li>
          <li>
            <button className="completed" onClick={btnCompleted}>Completed</button>
          </li>
        </ul>
        <button className="clear-completed" onClick={btnClearAll} >Clear completed</button>
      </footer>
    )
}


