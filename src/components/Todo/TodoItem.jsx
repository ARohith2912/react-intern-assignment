export default function TodoItem({ task, tasks, setTasks }) {
const toggle = () => {
setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t))
}


const remove = () => {
setTasks(tasks.filter(t => t.id !== task.id))
}


return (
<div>
<input type="checkbox" checked={task.completed} onChange={toggle} />
<span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
{task.text} ({task.priority})
</span>
<button onClick={remove}>Delete</button>
</div>
)
}