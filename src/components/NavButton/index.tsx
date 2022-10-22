import './style.scss'
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react'

interface LabeledValue extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: any;
  route: string;
  id_event?: number;
}

function NavButton({route, children, id_event }: LabeledValue){

  const navigate = useNavigate() 

  const handleRouterButtons = () =>{
    navigate(route)
  }
  return(
      <button className={`${children === 'Detalhes' ? 'detailsBurron' : 'btn'}`} onClick={handleRouterButtons}>
        {children}
      </button>
  )
}

export default NavButton