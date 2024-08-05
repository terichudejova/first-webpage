import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar'
import CarouselGallery from './CarouselGallery'

function App() {

  return (
    <div>
      <CarouselGallery/>
      <NavigationBar/>
    </div>
  )
}

export default App
