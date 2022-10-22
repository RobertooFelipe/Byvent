import './style.scss';
import Sidebar from '../../components/Sidebar'
import CardEvent from '../../components/CardEvent';

import {default as dataEvents} from '../../events.json'
import { useState } from 'react'

interface ICardEventProps{
  id_event: number;
  eventName:string;
  imgSrc:string;
  eventDate:string;
}


function ListEvents() {

  const [event] = useState<ICardEventProps[]>(dataEvents);

  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Listando todos eventos...</h1>
        </div>
        <div className='containerEvents'>
          <>
            {
              event.map((data) => 
                  <CardEvent 
                    key={data.id_event}
                    id_event={data.id_event}
                    eventName={data.eventName}
                    imgSrc={data.imgSrc} 
                    eventDate={data.eventDate}
                  />         
              )
            }
          </>
        </div>
      </section>
    </div>
  );
}

export default ListEvents;