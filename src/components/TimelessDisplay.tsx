import { useState, useEffect } from 'react'
import './TimelessDisplay.css'

interface TimeData {
  hours: string
  minutes: string
  seconds: string
  meridiem: string
  date: string
}

const TimelessDisplay = () => {
  const [time, setTime] = useState<TimeData>({
    hours: '00',
    minutes: '00',
    seconds: '00',
    meridiem: 'AM',
    date: '',
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()
      const meridiem = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12 || 12
      
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const date = now.toLocaleDateString('en-US', options)

      setTime({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        meridiem,
        date,
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="timeless-display">
      <div className="display-container">
        <div className="time-display">
          <div className="time-value">
            <span className="time-unit">{time.hours}</span>
            <span className="separator">:</span>
            <span className="time-unit">{time.minutes}</span>
            <span className="separator">:</span>
            <span className="time-unit seconds">{time.seconds}</span>
          </div>
          <div className="meridiem">{time.meridiem}</div>
        </div>
        
        <div className="date-display">
          <p>{time.date}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelessDisplay
