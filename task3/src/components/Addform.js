import { useState } from "react"

const Addform = ({onAdd}) => {
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [imglink, setImage] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add name')
            return
        }
        onAdd({name,email,age,phone,subject,imglink})
        setName('')
        setEmail('')
        setAge('')
        setPhone('')
        setSubject('')
        setImage('')
      }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div >
        <label className="add-form">Name: </label>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
      <label className="add-form">Email: </label>
        <input type="email" placeholder="Enter you email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <label className="add-form">Age: </label>
        <input type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div>
      <label className="add-form">Phone: </label>
        <input type="phone" placeholder="Enter your phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div>
      <label className="add-form">Subject: </label>
        <input type="text" placeholder="Enter Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      </div>
      <div>
      <label className="add-form">Image link: </label>
        <input type="link" placeholder="Enter Image link" value={imglink} onChange={(e)=>setImage(e.target.value)}/>
      </div>
      <input type="submit" className="btn" value= "Add Student" />
      </form>
  )
}
export default Addform