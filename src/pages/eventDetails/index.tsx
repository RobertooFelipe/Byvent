import './style.scss';
import Sidebar from '../../components/Sidebar'

import dataEvents from '../../services/miragejs/events.json'
import { useParams } from "react-router-dom";

interface IEventDetailsProps{
  id_event: number;
  eventName:string;
  imgSrc:string;
  eventDate:string;
  description:string;
}

type TUseParamsProps = {
  id?: string;
} 

function EventDetails() {

  const event: IEventDetailsProps[] = dataEvents;
  const params = useParams<TUseParamsProps>();

  const eventDetail = event.find(item => item.id_event === Number(params.id))

  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Detalhes evento...</h1>
        </header>
        <div>
          <header>

          </header>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;