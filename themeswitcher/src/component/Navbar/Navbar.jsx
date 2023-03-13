import React, { useContext } from 'react'
import {BsSun, BsFillMoonFill} from 'react-icons/bs'
import { themeContext } from '../../Context/DataContext'
import './Navbar.css'

const Navbar = () => {
    const {mode, toggle} = useContext(themeContext)

  return (
    <div className='navbar-col'>
        <div>
            <h4>Theme<span>Switch</span></h4>
        </div>
        <div className="switch" onClick={toggle}>
            {mode ? 
                <BsFillMoonFill className='on'/> : <BsSun className='off' />
            }
        </div>
    </div>
  )
}

export default Navbar