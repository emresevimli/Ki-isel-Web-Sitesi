import { useState } from 'react'
import './App.css'
import Sertifika from './components/Sertifika'
import Proje from './components/Proje'
import Anabolum from './components/Anabolum'

function App() {
  

  return (
   <div>
    <div className='sitecontrol'>
      <Sertifika/>
      <Anabolum/>
      <Proje/>
    </div>
    
   </div>
  )
}

export default App
