import TodoApp from './components/Todo/TodoApp'
import UserForm from './components/Forms/UserForm'
import MultiProgressBar from './components/Progress/MultiProgressBar'
import CountdownTimer from './components/Timer/CountdownTimer'
import SearchList from './components/Search/SearchList'

export default function App() {
return (
<div className="min-h-screen  from-slate-100 to-slate-200 p-6">
<div className="max-w-5xl mx-auto space-y-10">
<h1 className="text-4xl font-extrabold text-center text-slate-800">
React Intern Assignment
</h1>
<TodoApp />
<UserForm />
<MultiProgressBar />
<CountdownTimer />
<SearchList />
</div>
</div>
)
}