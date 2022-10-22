import './style.scss'

interface CardEventTypes{
  eventName: string;
  imgSrc: string;
  eventDate: string;
}

function CardEvent({eventName, imgSrc, eventDate}:CardEventTypes){
  return(
    <section className='cardEvent'>
      <img src={imgSrc} alt={eventName} />
      <footer>
        <div>
          <h1>{eventName}</h1>
          <h2>{eventDate}</h2>  
        </div>
        <div>
          <button>Detalhes</button>
        </div>
      </footer>   
    </section>
  )
}

export default CardEvent