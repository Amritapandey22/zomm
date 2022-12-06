import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.css'

const header = () => {
  return (
    <div className='header'>
      <Link to='/' className='title'>Check your knowledge</Link>
      <hr className='divider'/>
    </div>
  )
}

export default header
