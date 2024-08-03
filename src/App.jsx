import TodoInput from"./components/TodoInput"
import TodoList  from"./components/TodoList"
import React, { useState, useEffect } from 'react';

function App() {
const [todos, setTodos]=useState([
 
])
const[todoValue, setTodoValue]=useState('')
function persistData(newList){ //save updated to do list, localStorage.setItem is a method to store a data with a key & value
  localStorage.setItem('todos',JSON.stringify({todos:newList}))//{todos: newList}: This object literal has one key-value pair. The key is 'todos' and the value is the argument passed to the function, newList
}//the key is 'todos' and the value is the result of calling JSON.stringify() on an object literal.JSON.stringify(): This method converts a JavaScript object into a JSON string.
  function handleAddTodos(newTodo) {
    const newTodoList=[...todos, newTodo] //The spread operator (...) is used to copy the items from the existing todos array into a new array.
    persistData(newTodoList) //persistData stores newTodoList 
    setTodos(newTodoList) //newTodoList is indirectly used to update the todos and in order to updtae todos, it must passed by setTodos

  }
  function handleDeleteTodo(index){ //takes index parameter
    const newTodoList=todos.filter((todo, todoIndex)=>{  /*.The filter() function creates a new array containing only elements that pass a test implemented by the provided function*/
      return todoIndex !==index
// The filter function itself doesn't directly add elements. It creates a new list containing only the elements that pass the test defined in the callback function.
// true condition: index & todoIndex are not equal
    })
    persistData(newTodoList)
    setTodos(newTodoList)
    //todos could be modified only using setter function, newTodoList is specifically designed to store the updated to-do list after a deletion
  }
  function handleEditTodo(index){
    const valueToBeEdited= todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
    //after editing the item, the previous form of the item must be deleted from list, right
  }
  useEffect(() => { //The first line if(!localStorage) checks if the browser supports the localStorage API
    if(!localStorage){ // Local storage is a way to store data on the user's device locally
      return
    }
    let localTodos=localStorage.getItem('todos') //The .getItem() method is a function used with web storage APIs like localStorage
  
    if(! localTodos){ 
      return
    }

      console.log(localTodos)
      localTodos = JSON.parse(localTodos).todos //onverts the JSON string stored in localTodos back into a JavaScript object
      setTodos(localTodos) //onverts the JSON string stored in localTodos back into a JavaScript object
    
  },[] );

  return (
    <> {/*in react, it's ok to have self closing tag, */}
      <TodoInput todoValue={todoValue}  setTodoValue={setTodoValue}  handleAddTodos={handleAddTodos} /> {/* This passes the handleAddTodos function as a prop to the TodoInput component */}
      <TodoList handleEditTodo={handleEditTodo} handleAddTodos={handleAddTodos} todos={todos} handleDeleteTodo={handleDeleteTodo}/>{/*This passes the todos array as a prop to the TodoList component. */}
    </>
  )
}

export default App// the code is exporting a value named app. This means that other JavaScript files can import this value and use it within their code.

// "." in the "./components/TodoInput" represents current directory
//   "{/* */}" is used to make a comment inside the react
// < >:  fragment that is empty tag could include an element and does not have any affect on that
// the app function return jsx components and may return more or less components
// set of function>> set+functionName
/* two newTodoList(s) are not the same. if the index is not equaled to todoIndex, then it is allowed to stay in 
the array
filter function creates a new array that includes elements from the original array that meet a specific condition.
if(localTodos): if localTodos exist ,  if (!localTodos) : if localTodos does not exist

*/
//The first letter of function name is always capital in React
// .jsx is an HTML where JS could be written inside of it
/*let todos=[
  'Go to the gym',
  'Eat more fruits and verge',
  'Pick up the kids from school'
] */
/*useState is a hook in React that allows you to add state to functional components. 
This state can be of any data type, including arrays. The state is initialized with a value and 
can be updated using a setter function provided by useState. 
This allows the array or any other state variable to be dynamically updated within the component.*/
//const mean that variable name is constant and could not pointout sth else, but the array could be modefied
// A parent component"function App()"" that passes a prop to the child "TodoCard, TodoInput, & TodoList"
/*The role of setTodos is to take whatever array you give it and use 
that as the new value for the todos state, causing the component to update accordingly.*/