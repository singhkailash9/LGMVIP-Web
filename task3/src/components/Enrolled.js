import Newstudent from "./Newstudent";
const Enrolled = ({enrolled, onDelete}) => {
  return (
    <div>
       <>
       {enrolled.map((newstudent) => (
            <Newstudent key={newstudent.id} newstudent= {newstudent} onDelete={onDelete} />))}
        </>
    </div>
  )
}

export default Enrolled