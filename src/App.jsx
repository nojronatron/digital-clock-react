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
  const currHours = hours < 10 ? `0${hours}` : hours
  const currMinutes = minutes < 10 ? `0${minutes}` : minutes
  const currSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <section>
      <div id="clock-face">
        <Display id="clock-hours" value={currHours} height="300" count="2" skew />
        <Display id="clock-minutes" value={currMinutes} height="300" count="2" skew />
        <Display id="clock-seconds" value={currSeconds} height="200" count="2" skew />
        <p id="hours-label">Hours</p>
        <p id="minutes-label">Minutes</p>
        <p id="seconds-label">Seconds</p>
      </div>
    </section>
  )
}

export default App
