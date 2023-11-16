import { useState } from 'react'
import people from './data'

function App() {
  const [index, setIndex] = useState(0)
 

  
  const {name, job, image, text} = people [index]
  console.log(name);

  return (
    <>
    <main>
      <h2>holla</h2>
    </main>
      
    </> 
  )
   
  
}

export default App
