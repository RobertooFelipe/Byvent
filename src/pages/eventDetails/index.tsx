import './style.scss';
import Sidebar from '../../components/Sidebar'
import NavButton from '../../components/NavButton';
import logo from '../../assets/images/byvent_qr_code.svg'

import dataEvents from '../../services/miragejs/server/events.json'
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
            <h1>{eventDetail?.eventName} | {eventDetail?.eventDate}</h1>
          </header>
          <div className='alingItens'>
            <section className='detailsEventContainer'>
              <img src={eventDetail?.imgSrc} alt="Imagem evento" />
              <div className='textContentEvent'>
                <div>
                  <h2>Descrição</h2>
                  <p>{eventDetail?.description}</p>
                </div>
                <div>
                  <h2>Data do evento</h2>
                  <p>{eventDetail?.eventDate}</p>
                  <h2>Horário evento</h2>
                  <p>12h00 - 18h00</p>
                  <h2>Valor ingresso</h2>
                  <p>R$45,55</p>
                </div>
              </div>
            </section>
            <div className='containerSendData'>
              <img src={logo} alt="Byvent" />
              <NavButton route='/allEvents'>
                Comprar ingresso
              </NavButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;