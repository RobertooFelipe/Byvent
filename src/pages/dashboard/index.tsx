import './style.scss';
import Sidebar from '../../components/Sidebar'

function Dashboard() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Área de dashboard...</h1>
        </header>
      </section>
    </div>
  );
}

export default Dashboard;