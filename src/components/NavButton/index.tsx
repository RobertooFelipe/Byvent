import './style.scss'
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react'

interface LabeledValue extends ButtonHTMLAttributes<HTMLButtonElement>{
  route: string;
}

function NavButton({route, children }: LabeledValue){

  const navigate = useNavigate() 

  const handleRouterButtons = () =>{
    navigate(route)
  }
  return(
      <button className='btn' onClick={handleRouterButtons}>
        {children}
      </button>
  )
}

export default NavButton