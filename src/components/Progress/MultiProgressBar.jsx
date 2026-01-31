import { useState } from 'react'


export default function MultiProgressBar() {
const [values, setValues] = useState([20, 40, 60])


const update = (i, v) => {
const val = Math.min(100, Math.max(0, Number(v)))
const copy = [...values]
copy[i] = val
setValues(copy)
}


const avg = values.reduce((a, b) => a + b, 0) / values.length


return (
<div className="bg-white rounded-2xl shadow-lg p-6">
<h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
{values.map((v, i) => (
<input key={i} type="number" value={v} onChange={e => update(i, e.target.value)} />
))}


<div className="w-full bg-gray-300 rounded h-4 overflow-hidden">
<div className={`h-4 transition-all ${avg < 40 ? 'bg-red-500' : avg > 70 ? 'bg-green-500' : 'bg-yellow-500'}`}
style={{ width: `${avg}%` }} />
</div>
</div>
)
}