export default function Die(props) {

  return(
    <button 
      className={`die ${props.isHeld ? 'held' : ''}`}
      onClick={() => props.hold(props.id)}
    >
      {props.num}
    </button>
  )
}