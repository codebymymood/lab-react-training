import {useState} from 'react'

 function ClickablePicture(props) {

    let [newImg, setNew] = useState(props.img)

    function handleClick() {

        if(newImg == props.img) {
            setNew(props.imgClicked)
        }
        else {
            setNew(props.img)
        }
        
        
    }

    return (
        <div>
             <img onClick={handleClick} src={newImg} alt="" />
        </div>
    )
}

export default ClickablePicture

///////////////////// OTHER OPTION /////////////////////////////
/*
import {useState} from 'react'

 function ClickablePicture(props) {

    let [newImg, setNew] = useState(false)

    function handleClick() {

        setNew(!newImg)
        
    }

    let path = clicked ? props.imgClicked : props.img
    
    return (
        <div>
             <img onClick={handleClick} src={path} alt="" />
        </div>
    )
}

export default ClickablePicture








*/