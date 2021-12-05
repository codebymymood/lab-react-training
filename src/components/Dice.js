import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import {useState} from 'react'

 function Dice() {

    let diceArr = [dice1, dice2, dice3]

    let randomDice = diceArr[Math.floor(Math.random() * diceArr.length)]

    let [path, setPath] = useState(randomDice)

    function handleClick() {
        setPath(diceEmpty)
        setTimeout(() => {
            setPath(diceArr[Math.floor(Math.random() * diceArr.length)])
        }, 1000)

    }

    return (
        <div>
           <img className='dice' onClick={handleClick} src={path} /> 
        </div>
    )
}
export default Dice