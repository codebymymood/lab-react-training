import {useState} from 'react'

 function LikeButton(props) {

    let [count, setCount] = useState(props.initialValue)

    function handleClick() {
        setCount(count+1)
    }

   let colors=  ['purple','blue','green','yellow','orange','red']
    let randomColor = colors[Math.floor(Math.random()* colors.length)]

    return (
        <button style={ {backgroundColor: randomColor}}onClick={handleClick}>
            Cute Like {count}
        </button>
    )
}
export default LikeButton