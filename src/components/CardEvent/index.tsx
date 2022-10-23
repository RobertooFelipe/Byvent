import './style.scss'

import NavButton from '../NavButton'

interface ICardEventProps{
  id_event: number;
  eventName: string;
  imgSrc: string;
  eventDate: string;
}

function CardEvent({id_event, eventName, imgSrc, eventDate}:ICardEventProps){
  return(
    <section className='cardEvent'>
      <img src={imgSrc} alt={eventName} />
      <footer>
        <div>
          <h1>{eventName}</h1>
          <h2>{eventDate}</h2>  
        </div>
        <div>
          <NavButton route={`/eventDetails/${id_event}`}>
            Detalhes
          </NavButton>
        </div>
      </footer>   
    </section>
  )
}

export default CardEvent