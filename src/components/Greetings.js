
 function Greetings(props) {
    
    const {lang} = props

    let text = ''
    if (lang == 'de') {
        text = 'Hallo'
    }
    else if (lang == 'en') {
        text = 'Hello'
    }
    else if (lang == 'es') {
        text = 'Hola'
    }
    else if (lang == 'fr') {
        text = 'Bonjour'
    }
    
    return (
        <div>
            {text}
            {props.children}
        </div>
    )
}
export default Greetings