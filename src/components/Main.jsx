import Die from './Die'
import {useState} from 'react'

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push(randomNum)
    }
    return newDice
  }

  const diceElements = dice.map(num => <Die num={num}/>)

  return(
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
    </main>    
  )
}
