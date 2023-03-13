import React, { useContext } from 'react'
import {themeContext} from '../../Context/DataContext'
import './Home.css'
import dark from '../../assets/dark.jpg'
import light from '../../assets/light.jpg'

const Home = () => {
    const {mode} = useContext(themeContext)

  return (
    <div className='container'>
        <div className='col1'>
            
            {mode ? <img src={light} alt='ff'/> : <img src={dark} alt='ff'/>}
            <h1 className={mode ? `dark` : `light`}>Context Api Theme Switcher</h1>
            
        </div>
        

        
    </div>

  )
}

export default Home