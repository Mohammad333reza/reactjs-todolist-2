
import React from 'react';

//props mean properties & is just an agrument.
/* "const{children}=props" this command extract the children property 
form props and the assign it to the variable name children */
/* {children} : This is where the extracted children content is actually used or displayed 
in the component. Whatever is included as 
children when TodoCard is used in another part of the app, will appear at this location in the JSX.*/
//// A child component that accepts props
export default function TodoCard(props) {
  const{children, handleDeleteTodo, index, handleEditTodo}=props
  /*props in passed to the function as an argument, index is passed as a props to the child component, 
  */ 
  return ( 
    
          <li   className='todoItem' >
            {children}
            <div className='actionsContainer'>
              <button onClick={()=>{
                handleEditTodo(index)
              }}>
                <i       className="color-icon      fa-regular fa-pen-to-square"></i>
              </button>
              <button onClick={()=>{ handleDeleteTodo(index)}}>
                <i className="color-icon       fa-solid fa-trash"></i>
              </button>
            </div>
          </li> 
          
  )
}

/* Instaed of accessing properties of children & handleDeleteTodo  by props.children &
props.handleDeleteTodo the properties now can be accessed directly with children &
handleDeleteTodo, the const means the values of properties cannot be cahnged
 */


