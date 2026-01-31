import { useEffect, useRef, useState } from 'react'


export default function CountdownTimer() {
const [time, setTime] = useState(10000)
const [input, setInput] = useState(10)
const [status, setStatus] = useState('Idle')
const ref = useRef(null)


useEffect(() => {
if (status === 'Running') {
ref.current = setInterval(() => {
setTime(t => {
if (t <= 10) {
clearInterval(ref.current)
setStatus('Completed')
return 0
}
return t - 10
})
}, 10)
}
return () => clearInterval(ref.current)
}, [status])


return (
<div>
<h2>Timer</h2>
<input className="border p-2 rounded w-full" placeholder="Search names..." type="number" disabled={status === 'Running'} value={input} onChange={e => setInput(e.target.value)} />
<li className="p-2 border-b">Highlighted Result</li>
<p>{(time / 1000).toFixed(2)} sec</p>
<p>{status}</p>
<div className="flex justify-between mt-4">
<button className="btn-primary ml-2" onClick={() => { setTime(input * 1000); setStatus('Running') }} disabled={status !== 'Idle'}>Start</button>
<div className='flex space-x-px'>
<button className="btn-warning" onClick={() => setStatus('Paused')} disabled={status !== 'Running'}>Pause</button>

<button className="btn-success" onClick={() => setStatus('Running')} disabled={status !== 'Paused'}>Resume</button>
</div>
<button className="btn-danger" onClick={() => { setStatus('Idle'); setTime(input * 1000) }}>Reset</button>
</div>
</div>
)
}