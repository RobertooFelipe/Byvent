import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyWallet() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <div>
          <h1>Minha carteira...</h1>
        </div>
      </section>
    </div>
  );
}

export default MyWallet;