import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar'
import CarouselGallery from './CarouselGallery'
import { AddressMap } from './AddressMap'

function App() {

  return (
    <div>
      <CarouselGallery/>
      <NavigationBar/>
      <AddressMap/>
    </div>
  )
}

export default App
