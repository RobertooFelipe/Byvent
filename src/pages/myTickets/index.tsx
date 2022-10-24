import './style.scss';
import Sidebar from '../../components/Sidebar'
import CardEvent from '../../components/CardEvent';
import SearchItem from '../../components/SearchItem'
import logoByvent from '../../assets/images/byvent_logo.svg'

import { api } from '../../services/api'
import { useEffect, useState } from 'react';

interface ICardEventProps{
  id_event: number;
  eventName:string;
  imgSrc:string;
  eventDate:string;
}

function MyTickets() {

  const [events, setEvents] = useState<ICardEventProps[]>([]);
  const [eventsFilter, setEventsFilter] = useState<ICardEventProps[]>([]);
  const [ isFetching, setIsFetching ] = useState(false)

  const getEvents = () => {
    setIsFetching(true)
    api.get('events').then(({data}) => {
      setEvents(data)
      setEventsFilter(data)
      setIsFetching(false)
    })
  }

  useEffect(() => getEvents(), [])

  const handleFindItem = (inputValue:string) => {
    const eventDetail = events.filter(item => item.eventName.includes(inputValue))
    setEventsFilter(eventDetail);
  }

  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
          <header className='headerPositionContent'>
            <h1>Meus ingressos...</h1>
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
                    />         
                ): <span>Loading...</span>
              }
            </>
          </div>
          <div className='aboutMyTickets'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo id deleniti tenetur iure cumque temporibus excepturi sit possimus tempore et facilis, nam corrupti inventore vero sed necessitatibus similique maxime minus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo id deleniti tenetur iure cumque temporibus excepturi sit possimus tempore et facilis, nam corrupti inventore vero sed necessitatibus similique maxime minus.</p>
            <img src={logoByvent} alt="LogoByvent" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyTickets;