import './style.scss';
import Sidebar from '../../components/Sidebar'

function AddEvent() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Criando item...</h1>
        </header>
      </section>
    </div>
  );
}

export default AddEvent;