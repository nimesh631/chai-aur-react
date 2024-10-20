import { useState } from 'react';
import './App.css';
// import ToDoListItems from './components/ToDoListItems'; // Importing the ToDoListItems component

function App() {
  const [todoList, setTodoList] = useState([]);


  let saveToDoList = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    let toname = e.target.toname.value;
    if (!todoList.includes(toname)) {
      let finalDoList = [...todoList, toname];
      setTodoList(finalDoList);
    } else {
      alert('A to-do with this name already exists');
    }
   
  };

  // function deleteItem(value){
  //   let updatedList = todoList.filter((item)=>item!==value);
  //   setTodoList(updatedList);
  // }

  let list = todoList.map((value, index) => {
    return (
      <ToDoListItems key={index} value={value} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/> // Rendering the ToDoListItems component for each to-do item
    );
  });

 

  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <div>
          <form onSubmit={saveToDoList}>
            <input
              type="text"
              name="toname"
              className="border-2 border-gray-300 p-2 w-1/2 m-4"
            />
            <button className="border-2 border-gray-300 p-2 mb-4 bg-blue-500 rounded-lg">
              Save
            </button>
          </form>
        </div>

        <div>
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todoList,setTodoList}){
  let [status,setStatus]=useState(false)

  let deleteRow=()=>{
    let finalData=todoList.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData)
  }

  let checkStatus=()=>{

    setStatus(!status)
  }

  return(
    <li className={`${
        status ? 'line-through bg-yellow-600' : ''
      } bg-black text-white text-start px-2 py-2 m-2 cursor-pointer`}
      onClick={checkStatus} >{indexNumber+1}.
      {value} <span className='flex float-end px-2 cursor-pointer' onClick={deleteRow}> X</span>
  </li>
  )
}
