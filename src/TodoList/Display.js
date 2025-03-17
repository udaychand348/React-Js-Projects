import React from 'react'

const Display = ({task,deletehandler}) => {
    
  return (
    <div>
        <center>
            {
            
                task.map((value,index) => <div>
                    <h2 key={index}>{value}</h2>&nbsp;&nbsp;
                    <button onClick={()=> deletehandler(index)} >Delete</button>
                </div>)
           
            }

        </center>
      
    </div>
  )
}

export default Display
