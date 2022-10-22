import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyTickets() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Meus tickets...</h1>
        </div>
      </section>
    </div>
  );
}

export default MyTickets;