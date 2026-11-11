# EXPERIMENT 3: REACT LAB EXERCISE – STATE USING useState()

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To create a React application that demonstrates the use of State using the useState() Hook.

## 2. ALGORITHM

1. Start the program.
2. Create a React project using Vite and open it in VS Code.
3. Import useState from React in App.jsx.
4. Create state variables for counter, department, likes, and attendance.
5. Create buttons to increase, decrease, and reset the counter.
6. Display the student department and create a button to change it from CSE to ECE.
7. Create a Like button that increases the like count.
8. Create Student Attendance with Present, Absent, and Reset buttons.
9. Add CSS to display each state activity in a separate card.
10. Run the application using npm run dev.
11. Verify that the displayed values change when the buttons are clicked.
12. Stop the program.

## 3. PROJECT STRUCTURE

```text
Experiment_03/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

## 4. PROGRAMS

### Program 1: App.jsx

**Location:** `src/App.jsx`

```jsx
import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [department, setDepartment] = useState("CSE")
  const [likes, setLikes] = useState(0)
  const [attendance, setAttendance] = useState(0)

  return (
    <div className="container">
      <h1>React State Exercise</h1>

      <div className="card">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className="card">
        <h2>Student Department</h2>
        <p>Department: {department}</p>
        <button onClick={() => setDepartment("ECE")}>
          Change to ECE
        </button>
      </div>

      <div className="card">
        <h2>Like Button</h2>
        <p>Likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>
          Like
        </button>
      </div>

      <div className="card">
        <h2>Student Attendance</h2>
        <p>Present: {attendance}</p>
        <button onClick={() => setAttendance(attendance + 1)}>
          Present
        </button>
        <button onClick={() => setAttendance(attendance - 1)}>
          Absent
        </button>
        <button onClick={() => setAttendance(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
```

### Program 2: App.css

**Location:** `src/App.css`

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f7fb;
  color: #222;
}

.container {
  min-height: 100vh;
  text-align: center;
  padding: 40px 20px;
}

.container h1 {
  color: #1e3a5f;
  margin-bottom: 30px;
}

.card {
  width: 350px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border: 1px solid #dfe5ec;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.card h2 {
  color: #2563eb;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.card p {
  font-size: 18px;
}

button {
  padding: 10px 16px;
  margin: 5px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
```

### Program 3: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Program 4: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_03 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Click the buttons and verify that the counter, department, likes, and attendance values are updated.

## 6. BUILD CHECK

```bash
npm run build
```

## 7. OUTPUT

<img width="816" height="455" alt="image" src="https://github.com/user-attachments/assets/466a8d57-1bc8-490d-9447-acf3c59cf685" />


## 8. OBSERVATION

The application successfully updates the counter, department, like count, and attendance values using React State. Each state change immediately updates the user interface.

## 9. RESULT

Thus, the React application using the useState() Hook was successfully created and the state values were updated using button click events.
