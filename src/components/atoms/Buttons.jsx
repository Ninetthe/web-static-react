
import './buttons.css'

function Buttons( {props}){
    return(
        <>
            <buttons className={props.buttonType}>
                {props.children}
            </buttons>
        
        
        </>
    )
}
export default Buttons;