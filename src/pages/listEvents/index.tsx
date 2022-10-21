import './style.scss';
import Sidebar from '../../components/Sidebar'

function ListEvents() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='hero'>
        <h1>Listando todos eventos...</h1>
      </section>
    </div>
  );
}

export default ListEvents;