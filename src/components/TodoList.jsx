import React from 'react';
import TodoCard from './TodoCard';


export default function TodoList(props) {
  const {todos}=props
  // "const {todos}=props" extract the todos property from props and assign it to todos variable
  return (
    <ul className='main'>
{/*class name is used instaed of class in react */}
{/*"TodoCard is just a component," */}
{/* todoIndex determine the order, for passing parameters and returning ( ) is 
used and for java script expression that determine where is started and ended { } are used.  */}
      {todos.map((todo, todoIndex)=> { //is always the first component of map represent element and second component represent index
        return(

          <TodoCard  {...props}  key={todoIndex} index={todoIndex}> {/*the index for other parts are provided from here */}
            <p>{todo}</p>
          </TodoCard>
               
        )
      })}
    </ul>
  )
}
/*rfc: react functional component, this command put the function inside div tag.
by performing a function on each item.  first parameter represent current item & 
second parameter represent current item index 
,<li/> : create individual list entery, key is used when creating listof items, 
todo: represent the content of list item   */
/* 
instaed of <TodoCard key={todoIndex}> </TodoCard>
following tags may be used:
<li className='todoItem' key={todoIndex}>{todo}
    <i className="fa-regular fa-pen-to-square"></i>
</li>
*/ /*
{
  key: todoIndex,
  children: <p>{todo}</p>
}
 in jsx files the properties of an object could be created using attributes of a HTML tag 
 or tags inside or outside of the HTML tag.






*/
