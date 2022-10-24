import './style.scss'

import NavButton from '../NavButton'
import OpenModal from '../OpenModal'

interface ICardEventProps{
  id_event: number;
  eventName: string;
  imgSrc: string;
  eventDate: string;
  modal?: boolean;
  admOption?: boolean;
}

function CardEvent({id_event, eventName, imgSrc, eventDate, modal, admOption}:ICardEventProps){

  return(
    <section className='cardEvent'>
      <img src={imgSrc} alt={eventName} />
      <footer>
        <div>
          <h1>{eventName}</h1>
          <h2>{eventDate}</h2>  
        </div>
        <div>
          {modal === true ? 
          <OpenModal 
            eventName={eventName} 
            eventDate={eventDate} 
            imgSrc={imgSrc}
            admOption={admOption}
          />
          :                     
          <NavButton 
            route={`/eventDetails/${id_event}`}>
            Detalhes
          </NavButton>}
        </div>
      </footer>   
    </section>
  )
}

export default CardEvent