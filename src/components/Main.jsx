import Die from './Die'
import {useState} from 'react'
import { nanoid } from 'nanoid'

export default function Main() {
  const [dice, setDice] = useState([])

  function generateAllNewDice() {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push({
        id: nanoid(),
        value: randomNum,
        isHeld: false
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} isHeld={dieObj.isHeld} num={dieObj.value}/>)

  return(
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button 
        className="roll"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>    
  )
}
