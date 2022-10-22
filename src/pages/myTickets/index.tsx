import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyTickets() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <h1>Meus tickets...</h1>
      </section>
    </div>
  );
}

export default MyTickets;