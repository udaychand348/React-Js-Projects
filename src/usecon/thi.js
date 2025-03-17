import React, { useContext } from 'react'
import InfoContext from './cont'

const Thi = () => {

    let {first,second} = useContext(InfoContext);

  return (
    <div>
      <center>
        <h1> I am going to show the values i got from first and second page</h1>
        <h2> Value from First is {first}</h2>
        <h2> Value from  Second is {second}</h2>
      </center>
    </div>
  )
}

export default Thi
