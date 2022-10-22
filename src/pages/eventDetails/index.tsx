import './style.scss';
import Sidebar from '../../components/Sidebar'

function EventDetails() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Detalhes evento...</h1>
        </header>
      </section>
    </div>
  );
}

export default EventDetails;