import './style.scss';
import Sidebar from '../../components/Sidebar'

function Dashboard() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='hero'>
        <h1>Área de dashboard...</h1>
      </section>
    </div>
  );
}

export default Dashboard;