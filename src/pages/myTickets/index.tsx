import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyTickets() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Meus tickets...</h1>
        </header>
      </section>
    </div>
  );
}

export default MyTickets;