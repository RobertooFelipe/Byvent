import './style.scss'
import logo from '../../assets/images/byvent_logo.svg'

import addIcon from '../../assets/images/icon_add.svg'
import backIcon from '../../assets/images/icon_back.svg'
import dashboardIcon from '../../assets/images/icon_dashboard.svg'
import ticketIcon from '../../assets/images/icon_ticket.svg'
import listIcon from '../../assets/images/icon_list.svg'
import Button from '../Button'

import { useHistory  } from 'react-router-dom'

function Sidebar(){

  const history = useHistory()

  const handleAddPageRouter = () => {
    history.push('/Add')
  }

  const handleListPageRouter = () => {
    history.push('/List')
  }

  const handleDashboardPageRouter = () => {
    history.push('/Dashboard')
  }

  const handleTicketsPageRouter = () => {
    history.push('/Tickets')
  }

  const handleLogoutPageRouter = () => {
    history.push('/')
  }

  return(
    <div className='containerToolbar positionElements'>
      <div className='positionElements'>
        <img src={logo} alt="Byvent Logo" />
      </div>
      <div className='positionElements'>
        <Button onClick={handleAddPageRouter}>
          <img src={addIcon} alt="Byvent Logo" />
        </Button>
        <Button onClick={handleListPageRouter}>
          <img src={listIcon} alt="Byvent Logo" />
        </Button>
        <Button onClick={handleDashboardPageRouter}>
          <img src={dashboardIcon} alt="Byvent Logo" />
        </Button>
        <Button onClick={handleTicketsPageRouter}>
          <img src={ticketIcon} alt="Byvent Logo" />
        </Button>
      </div>

      <div className='positionElements'>
        <Button onClick={handleLogoutPageRouter}>
          <img src={backIcon} alt="Byvent Logo" />
        </Button>
      </div>
    </div>
  )
}

export default Sidebar