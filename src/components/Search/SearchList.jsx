import { useState } from 'react'


const names = ['Rohith', 'Rahul', 'Ramesh', 'Suresh', 'Rohith Kumar']


export default function SearchList() {
const [query, setQuery] = useState('')


const filtered = names.filter(n => n.toLowerCase().includes(query.toLowerCase()))


const highlight = (text) => {
if (!query) return text
return text.split(new RegExp(`(${query})`, 'gi')).map((p, i) =>
p.toLowerCase() === query.toLowerCase() ? <b key={i}>{p}</b> : p
)
}


return (
<div>
<h2>Live Search</h2>
<input value={query} onChange={e => setQuery(e.target.value)} />
<p>Count: {filtered.length}</p>
{filtered.length === 0 && <p>No matches found</p>}
<ul>
{filtered.map((n, i) => <li key={i}>{highlight(n)}</li>)}
</ul>
</div>
)
}