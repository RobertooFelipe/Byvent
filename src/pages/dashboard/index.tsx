import './style.scss';
import Sidebar from '../../components/Sidebar'
import CardEvent from '../../components/CardEvent';
import SearchItem from '../../components/SearchItem'
import SoldEvent from '../../components/SoldEvent';
import NavButton from '../../components/NavButton';
import iconWallet from '../../assets/images/icon_wallet.svg'

import { api } from '../../services/api'
import { useEffect, useState } from 'react';

interface ICardEventProps{
  id_event: number;
  eventName:string;
  imgSrc:string;
  eventDate:string;
  priceEvent:string;
}

function Dashboard() {

  const [events, setEvents] = useState<ICardEventProps[]>([]);
  const [log, setLog] = useState<ICardEventProps[]>([]);
  const [eventsFilter, setEventsFilter] = useState<ICardEventProps[]>([]);
  const [ isFetching, setIsFetching ] = useState(false)
  const [ isFetchingLog, setIsFetchingLog ] = useState(false)

  const getEvents = () => {
    setIsFetching(true)
    api.get('events').then(({data}) => {
      setEvents(data)
      setEventsFilter(data)
      setIsFetching(false)
    })
  }

  const getLogs = () => {
    setIsFetchingLog(true)
    api.get('log').then(({data}) => {
      setLog(data)
      setIsFetchingLog(false)
    })
  }

  useEffect(() => {
    getEvents()
    getLogs()
  },[])

  const handleFindItem = (inputValue:string) => {
    const eventDetail = events.filter(item => item.eventName.includes(inputValue))
    setEventsFilter(eventDetail);
  }

  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
          <header className='headerPositionContent'>
            <h1>Ambiente de controle...</h1>
            <SearchItem
              onChange={handleFindItem}
            />
          </header>
        <div className='dashboardContent'>
          <div className='containerEvents'>
            <>
              { !isFetching?
                eventsFilter.map((data) => 
                    <CardEvent 
                      key={data.id_event}
                      id_event={data.id_event}
                      eventName={data.eventName}
                      imgSrc={data.imgSrc} 
                      eventDate={data.eventDate}
                      modal={true}
                      admOption={true}
                    />         
                ):<span>Loading...</span>
              }
            </>
          </div>
          <div className='rightContnetDashboardPage'>
            <header>
              <h2>
                Total de eventos criados
              </h2>
              <h1>5</h1>
            </header>
            <div className='listEventsSold'>
              <h2>Ingressos vendidos</h2>
              <section className='listHistSold'>
                {!isFetchingLog?
                  log.map((data) => 
                  <SoldEvent
                    key={data.id_event}
                    eventPrice={data.priceEvent}
                    eventName={data.eventName}       
                  />
                ):<span>Loading...</span>}
              </section>
              <div className='buttonWalletContent'>
                <NavButton route='/myWallet'>
                  Ver minha carteira <img src={iconWallet} alt="wallet" />
                </NavButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;