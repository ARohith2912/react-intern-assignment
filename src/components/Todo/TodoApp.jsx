import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import FilterControls from './FilterControls'


export default function TodoApp() {
const [tasks, setTasks] = useState(() => {
return JSON.parse(localStorage.getItem('tasks')) || []
})
const [text, setText] = useState('')
const [priority, setPriority] = useState('Low')
const [filter, setFilter] = useState('all')


useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])


const addTask = () => {
if (!text.trim()) return
setTasks([...tasks, { id: Date.now(), text, completed: false, priority }])
setText('')
}


const filteredTasks = tasks.filter(task => {
if (filter === 'active') return !task.completed
if (filter === 'completed') return task.completed
return true
})
return (
<div className="bg-white p-4 rounded-xl shadow">
<h2 className="text-lg font-semibold mb-3">Todo App</h2>
<div className="flex gap-1 mb-3 pb-2">
<input className="border p-1 flex-3 rounded" value={text} onChange={e => setText(e.target.value)} />

<select className="border p-1 rounded" value={priority} onChange={e => setPriority(e.target.value)}>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>

<button className="bg-blue-500 text-white px-4 p-2 rounded" onClick={addTask}>Add</button>
</div>


<FilterControls setFilter={setFilter} />


{filteredTasks.map(task => (
<TodoItem key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
))}
</div>
)
}