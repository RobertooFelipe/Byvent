import './style.scss'
import { useNavigate } from 'react-router-dom';

interface LabeledValue {
  value: any;
  children: any;
}

function Button({value, children}: LabeledValue){

  const navigate = useNavigate() 

  const handleRouterButtons = () =>{
    console.log(value)
    navigate('./')
  }
  return(
    <>
      <button className='btn' onClick={handleRouterButtons}>
        {children}
      </button>
    </>
  )
}

export default Button