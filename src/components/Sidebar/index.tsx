import './style.scss'
import logo from '../../assets/images/byvent_logo.svg'

import addIcon from '../../assets/images/icon_add.svg'
import backIcon from '../../assets/images/icon_back.svg'
import dashboardIcon from '../../assets/images/icon_dashboard.svg'
import ticketIcon from '../../assets/images/icon_ticket.svg'
import listIcon from '../../assets/images/icon_list.svg'
import Button from '../Button'

function Sidebar(){

  return(
    <div className='containerToolbar positionElements'>
      <div className='positionElements'>
        <img src={logo} alt="Byvent Logo" />
      </div>
      <div className='positionElements'>
        <Button value='add'>
          <img src={addIcon} alt="Byvent Logo" />
        </Button>
        <Button value='handleListPageRouter'>
          <img src={listIcon} alt="Byvent Logo" />
        </Button>
        <Button value='handleDashboardPageRouter'>
          <img src={dashboardIcon} alt="Byvent Logo" />
        </Button>
        <Button value='handleTicketsPageRouter'>
          <img src={ticketIcon} alt="Byvent Logo" />
        </Button>
      </div>

      <div className='positionElements'>
        <Button value='handleLogoutPageRouter'>
          <img src={backIcon} alt="Byvent Logo" />
        </Button>
      </div>
    </div>
  )
}

export default Sidebar