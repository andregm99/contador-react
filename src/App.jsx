import { useEffect, useState } from 'react'
import "./styles/style.css"
function App() {
  const [count,SetCount]=useState(0)
  const [pass,setPass]=useState('')

    function passando(){
        if (pass=='') {
            SetCount((count)+1)
        }
        else{
            if (pass<=0) {
                alert('Digite um número maior que zero')
            }
            else{
                SetCount((count)+ parseInt(pass))
            }
        }
    }

    function descendo(){
        if (count<=0) {
            alert('contador esta zerado aumente o valor para em seguida poder diminuir')
        }
        else{
           if (pass=='') {
            SetCount((count)-1)
           }
           else{
                if (pass<=0) {
                    alert('Digite um valor maior que zero')
                }
                else{
                    SetCount((count)-parseInt(pass))
                }
           }
        }
    }
  return (
    <div className="App">
        <h3>contador</h3>
           <span>{count}</span> 
        <p>
            <span>passo:</span>
            <input type="number" onChange={e=>setPass(+e.target.value)}/>
        </p>
        <button type='button' onClick={passando}>+</button>
        <button type='button' onClick={descendo}>-</button>
        </div>
  )
}

export default App
