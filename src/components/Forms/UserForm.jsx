import { useState } from 'react'


export default function UserForm() {
const [data, setData] = useState({ name: '', email: '', id: '', password: '' })
const [errors, setErrors] = useState({})
const [show, setShow] = useState(false)
const [submitted, setSubmitted] = useState(null)


const validate = () => {
let e = {}
if (!data.name) e.name = 'Required'
if (!/\S+@\S+\.\S+/.test(data.email)) e.email = 'Invalid email'
if (!data.id) e.id = 'Required'
if (!data.password) e.password = 'Required'
setErrors(e)
return Object.keys(e).length === 0
}


const submit = e => {
e.preventDefault()
if (!validate()) return
setSubmitted(data)
setData({ name: '', email: '', id: '', password: '' })
}
return (
<div className="bg-white rounded-2xl shadow-lg p-6">
<h2 className="text-2xl font-semibold mb-4">User Registration</h2>
<form onSubmit={submit}>
<input className="border p-2 rounded w-full" placeholder="Name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
{errors.name}
<input className="border p-2 rounded w-full" placeholder="Email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
{errors.email}
<input className="border p-2 rounded w-full" placeholder="ID" value={data.id} onChange={e => setData({ ...data, id: e.target.value })} />
{errors.id}
<input className="border p-2 rounded w-full" type={show ? 'text' : 'password'} placeholder="Password" value={data.password} onChange={e => setData({ ...data, password: e.target.value })} />
<div className=' flex justify-between  mt-2 '>
<button className="bg-green-400 text-white p-2 px-4 py-2 rounded" type="button" onClick={() => setShow(!show)}>Show/Hide</button>
{errors.password}
<button className="bg-green-400 text-white p-2 px-4 py-2 rounded" type="submit">Submit</button>
</div>
</form>


{submitted && <pre>{JSON.stringify(submitted, null, 2)}</pre>}
</div>
)
}