import './style.scss';
import Sidebar from '../../components/Sidebar'

function Dashboard() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Área de dashboard...</h1>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;