import { useState } from 'react'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

//let counter = 5




const addValue = () => {
// counter = counter + 1
console.log("clicked", counter);
//setCounter(counter + 1)

// what if we have use 4-5 setCounter  like below in this case only one counter will run
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)


// so for running multiple setCounter we have to use in different ways

setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)

// in this case when we click on add value it will show directly 15 to 20 in one click



}
const decValue = () => {
// counter = counter + 1
setCounter(counter - 1)
console.log("clicked", counter);

}

  return (
    <>
      <h1>Coffe aur react</h1>
      <h2>Count is: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value</button>
    </>
  )
}

export default App
