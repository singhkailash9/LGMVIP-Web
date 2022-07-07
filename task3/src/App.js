import Addform from "./components/Addform";
import Enrolled from "./components/Enrolled";
import { useState } from "react"

function App() {
  const [enrolled, setForms] = useState(
    [
        {
            id: "1",
            name: "Rohan",
            email: "a@b.com",
            age: "20",
            phone: "1111",
            subject: "Java, Python",
            imglink: "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
        },
        {
            id: "2",
            name: "Sohan",
            email: "b@c.com",
            age: "21",
            phone: "2222",
            subject: "C++",
            imglink: "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
        },
    ]
)

  const addForm = (newstudent)=>{
    const id = Math.floor(Math.random()*10000)+1;
    const newEnrolled = { id, ...newstudent}
    setForms([...enrolled, newEnrolled])
  }
  const deleteTask = (id)=>{
    setForms(enrolled.filter((newstudent)=>newstudent.id !==id))
  }
  return (
    <div className="container">
      <div className="addform">
        <Addform onAdd={addForm}/>
      </div>
      <div className="enrolled">
      {enrolled.length>0?<Enrolled  enrolled={enrolled} onDelete={deleteTask} ></Enrolled>:"No student enlisted"}
      </div>
    </div>
  );
}

export default App;
