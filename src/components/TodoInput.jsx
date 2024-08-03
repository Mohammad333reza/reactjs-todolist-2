import React, { useState } from 'react';

export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue}= props
  // todoValue is initialized to an empty string
    return (
      <header>
         <input  value={todoValue} onChange={(e)=>{
              setTodoValue(e.target.value)
         }}   placeholder="Enter todo...."/>
         <button  className="button"       onClick={()=>{
          handleAddTodos(todoValue)
          setTodoValue('') // reset the add field to it's original value
         }}>Add</button>  
      </header>
    )
  }
  
{/* "()=>{ }":arrow function;Arrow functions are ideal for iterating over arrays of data or mapping components. 
They help create concise and clean code when processing data in React components.The function is run
when button is clicked*/}
/*value is a predefined attribute for the HTML tag, & while assigning a property to 
an attribute the const or let or var are not needed  */
/* e represent event:acion, e.target:target element, e.target.value: target elemnt after 
user interaction has happend   */
//placeholder: display sth inside the tag