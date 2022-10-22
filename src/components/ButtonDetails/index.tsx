import './style.scss'

interface IButtonDetailsProps{
  id_event: number;
}

function ButtonDetails({id_event}:IButtonDetailsProps){

const handleButtonDetails = () =>{
  console.log(id_event)
}

  return(
    <button onClick={handleButtonDetails}>
      Detalhes
    </button>
  )
}

export default ButtonDetails