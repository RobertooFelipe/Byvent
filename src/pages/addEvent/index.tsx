import './style.scss';
import Sidebar from '../../components/Sidebar'

function AddEvent() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='hero'>
        <h1>Criando item...</h1>
      </section>
    </div>
  );
}

export default AddEvent;