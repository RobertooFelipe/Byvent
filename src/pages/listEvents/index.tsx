import './style.scss';
import Sidebar from '../../components/Sidebar'
import CardEvent from '../../components/CardEvent';
import SearchItem from '../../components/SearchItem'
import { api } from '../../services/api'
import { useEffect, useState } from 'react';

interface ICardEventProps{
  id_event: number;
  eventName:string;
  imgSrc:string;
  eventDate:string;
}

function ListEvents() {

  const [events, setEvents] = useState<ICardEventProps[]>([]);
  const [ isFetching, setIsFetching ] = useState(false)

  const getEvents = () => {
    setIsFetching(true)
    api.get('events').then(({data}) => {
      setEvents(data)
      setIsFetching(false)
    })
  }

  useEffect(() => getEvents(), [])

  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header className='headerPositionContent'>
          <h1>Listando todos eventos...</h1>
          <SearchItem/>
        </header>
        <div className='containerEvents'>
          <>
            { !isFetching?
              events.map((data) => 
                  <CardEvent 
                    key={data.id_event}
                    id_event={data.id_event}
                    eventName={data.eventName}
                    imgSrc={data.imgSrc} 
                    eventDate={data.eventDate}
                  />         
              ): <span>Loading...</span>
            }
          </>
        </div>
      </section>
    </div>
  );
}

export default ListEvents;