import './style.scss';
import Sidebar from '../../components/Sidebar'
import CardEvent from '../../components/CardEvent';
import teste from '../../assets/images/teste.svg'

function ListEvents() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Listando todos eventos...</h1>
         
        </div>
        <div className='containerEvents'>
          <CardEvent eventName='Formatura' imgSrc={teste} eventDate='18 de outubro de 2022'></CardEvent>
        </div>
      </section>
    </div>
  );
}

export default ListEvents;