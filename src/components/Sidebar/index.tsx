import './style.scss'
import logo from '../../assets/images/byvent_logo.svg'

import addIcon from '../../assets/images/icon_add.svg'
import backIcon from '../../assets/images/icon_back.svg'
import dashboardIcon from '../../assets/images/icon_dashboard.svg'
import ticketIcon from '../../assets/images/icon_ticket.svg'
import listIcon from '../../assets/images/icon_list.svg'
import NavButton from '../NavButton'

function Sidebar(){

  return(
    <div className='containerToolbar positionElements'>
      <div className='positionElements solitBtn'>
        <img src={logo} alt="Byvent Logo" />
      </div>
      <div className='positionElements'>
        <NavButton route='/addEvent'>
          <img src={addIcon} alt="Byvent Logo" />
        </NavButton>
        <NavButton route='/allEvents'>
          <img src={listIcon} alt="Byvent Logo" />
        </NavButton>
        <NavButton route='/dashboard'>
          <img src={dashboardIcon} alt="Byvent Logo" />
        </NavButton>
        <NavButton route='/myTickets'>
          <img src={ticketIcon} alt="Byvent Logo" />
        </NavButton>
      </div>

      <div className='positionElements solitBtn'>
        <NavButton route='/'>
          <img src={backIcon} alt="Byvent Logo" />
        </NavButton>
      </div>
    </div>
  )
}

export default Sidebar