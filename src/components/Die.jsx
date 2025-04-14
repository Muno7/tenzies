export default function Die(props) {
  return(
    <button className={`die ${props.isHeld ? 'held' : ''}`}>
      {props.num}
    </button>
  )
}