import './style.scss'

interface ISoldEventProps{
  eventName: string;
  eventPrice: string;
}

function SoldEvent({eventName, eventPrice}:ISoldEventProps){
  return(
    <section className='soldEvent'>
      <p>{eventName}</p>
      <p>{eventPrice}</p>
    </section>
  )
}

export default SoldEvent