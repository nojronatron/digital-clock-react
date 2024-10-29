import {useState} from 'react'
import './App.css'
import { Display } from 'react-7-segment-display';

function App() {
const [time, setTime] = useState(new Date())
  setInterval(() => {
    setTime(new Date())
  }, 1000)
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return (
    <section>
      <div id="clock-face">
        <Display id="clock-hours" value={hours} height="300" count="2" skew />
        <Display id="clock-minutes" value={minutes} height="300" count="2" skew />
        <Display id="clock-seconds" value={seconds} height="200" count="2" skew />
        <p id="hours-label">Hours</p>
        <p id="minutes-label">Minutes</p>
        <p id="seconds-label">Seconds</p>
      </div>
    </section>
  )
}

export default App
