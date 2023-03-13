import React, {useContext} from 'react'
import {themeContext} from './Context/DataContext'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import './App.css'

const App = () => {
  const {mode} = useContext(themeContext)

  return (
    <div className='app' data-theme={mode}>
      <div>
        <Navbar />
        <Home/>
      </div>
    </div>
  )
}

export default App