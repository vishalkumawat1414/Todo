import React from 'react'
import './Task.css'
function Task() {
  return (
    <div className='TopBox'>
    <div className='FlexBox'>
         <div className='Taskname'>
             Task1  
         </div>
         <div className='Descrip'>
            Description
         </div>
         <div className='comButton'>
             Complete
         </div>
          <div className='delButton'>
            Delete
          </div>
       
    </div>
        </div>
  )
}

export default Task