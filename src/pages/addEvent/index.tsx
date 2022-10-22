import './style.scss';
import Sidebar from '../../components/Sidebar'

function AddEvent() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Criando item...</h1>
        </div>
      </section>
    </div>
  );
}

export default AddEvent;