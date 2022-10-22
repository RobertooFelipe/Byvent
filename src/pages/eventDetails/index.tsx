import './style.scss';
import Sidebar from '../../components/Sidebar'

function EventDetails() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Detalhes evento...</h1>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;