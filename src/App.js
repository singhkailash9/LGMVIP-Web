import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: "1",
            text: "Test",
            day: "Friday 2:30 PM",
            reminder: "True",
        },
        {
            id: "2",
            text: "Clinic Visit",
            day: "Sunday 5:30 PM",
            reminder: "True",
        },
        {
            id: "3",
            text: "Bill Payment",
            day: "Monday 11:30 AM",
            reminder: "False",
        },
    ]
)

const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000)+1;
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id !==id))
}
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className='container'>
      <div className='addtask'>
      <AddTask  onAdd={addTask}></AddTask> 
      </div>
      <div className='col-flex'>
      {tasks.length>0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No Tasks, please add some.'}
      </div>
    </div>
  );
}

export default App;
