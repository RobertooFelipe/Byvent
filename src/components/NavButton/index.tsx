import './style.scss'
import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react'

interface INavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: any;
  route: string;
}

function NavButton({route, children }: INavButtonProps){

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