import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [department, setDepartment] = useState('CSE')
  const [likes, setLikes] = useState(0)
  const [attendance, setAttendance] = useState(0)

  return (
    <div className="container">
      <h1>React State Exercise</h1>
      <div className="card">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="card">
        <h2>Student Department</h2>
        <p>Department: {department}</p>
        <button onClick={() => setDepartment('ECE')}>Change to ECE</button>
      </div>
      <div className="card">
        <h2>Like Button</h2>
        <p>Likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
      </div>
      <div className="card">
        <h2>Student Attendance</h2>
        <p>Present: {attendance}</p>
        <button onClick={() => setAttendance(attendance + 1)}>Present</button>
        <button onClick={() => setAttendance(attendance - 1)}>Absent</button>
        <button onClick={() => setAttendance(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
