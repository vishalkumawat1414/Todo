import React from 'react'
import Navbar from './Navbar'
import './Container.css'
import Bar from './Bar'
import Table from './Table'
function Container() {
  return (
    <div className='container'>
        <div className='small-cont'>
            <Navbar/>
               <Bar/>
            <Table/>
        </div>
    </div>
  )
}

export default Container