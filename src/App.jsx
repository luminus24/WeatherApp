import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

function App() {
  const [coords, setCoords] = useState()

  useEffect(() => {
    const success = pos => {
      const latlon = {
        lat : pos.coords.latitude,
        lon : pos.coords.longitude
      }
      setCoords(latlon)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <div className="App">
      <div>
        <CardWeather lat={coords?.lat} lon={coords?.lon}/>
      </div>
    </div>
  )
}

export default App
