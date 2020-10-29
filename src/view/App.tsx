import React from 'react'
import { Routes } from './routes'
import '@/components/typography/font.css'
import '@/components/layout/normalize.css'
import '@/components/layout/body.css'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  )
}

export default App
