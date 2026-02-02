import { useEffect } from 'react'
import { formatDate } from '../../helpers/formatDate'
import './styles.css'
import { useState } from 'react';

export const Header = ()=>{

 const [date, setDate] = useState(() => formatDate(new Date()))

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(formatDate(new Date()))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

    return(
        <header className='header'>
            <div className='header-right'>
                <h1 className='header-title title-h1'>News App</h1>
                <p className='header-date'>{date}</p>
            </div>
            <div className="header-weather"></div>
        </header>
    )
}