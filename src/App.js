
//  ** App.js for usecon folder
// import React, { useState } from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'

// import Fir from './usecon/fir'
// import Sec from './usecon/sec'
// import Thi from './usecon/thi'
// import InfoContext from './usecon/cont'
// const App = () => {

//   let[first ,setFirst] = useState("1");
//   let[second ,setSecond] = useState("2");

  
//   return (
//     <div>

//          <InfoContext.Provider value={{first,setFirst,second,setSecond}}>
//             <BrowserRouter>
            
//             <Routes>

//               <Route path="/1" element={<Fir/>} />
//               <Route path="/2" element={<Sec/>} />
//               <Route path="/3" element={<Thi/>} />

//             </Routes>
//             </BrowserRouter>

      
//       </InfoContext.Provider>




//     </div>
//   )
// }

// export default App


















// TodoList
import React from 'react'
import Fil1 from './TodoList/Fil1'
const App = () => {
  
  return (
    <div>
      <Fil1 />
    </div>
  )
}

export default App
