import Die from './Die'
import { useState, useRef } from 'react'
import { nanoid } from 'nanoid'

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice())

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
    setDice(prevDice => (
      prevDice.map(dice => ({...dice, value: dice.isHeld ? dice.value : Math.ceil(Math.random() * 6)}))
    ))
  }

  function hold(id) {
    setDice(prevDice => (
      prevDice.map(dice => ({...dice, isHeld: dice.id === id ? !dice.isHeld : dice.isHeld}))
    ))
  }


  const diceElements = dice.map(dieObj => (
    <Die 
      key={dieObj.id} 
      id={dieObj.id} 
      num={dieObj.value} 
      isHeld={dieObj.isHeld} 
      hold={hold}
    />
  ))

  return(
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
