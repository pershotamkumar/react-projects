import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './searchbox'
import InfoBox from './infobox'

function App() {
  const [weatherinfo,setweatherInfo]=useState(null)
  const [cityNotFound, setCityNotFound] = useState(false);

  let updateinfo=(newvalue)=>{
    setweatherInfo(newvalue)
  }
  let rfound = (results) => {
    setCityNotFound(results); 
    console.log(results)
  };
  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgNvf5zH3RLCaoDYDWM5MPPwLcLik-KZOvHngXS5wE8S-1PE0L-INPDnjaEm4WFJE4I8&usqp=CAU")',
      backgroundSize: 'cover', // or 'contain' based on your needs
      backgroundPosition: 'center',
      height: '100vh', // or adjust according to your layout
      width: '100%', // adjust as needed
  }}> 
      
      <SearchBox updateinfo={updateinfo} rcheck={rfound}/>
      <InfoBox obj={weatherinfo}  cityNotFound={cityNotFound}/>
     
    </div>
  )
}

export default App
