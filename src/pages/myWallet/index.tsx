import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyWallet() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='hero'>
        <h1>Minha carteira...</h1>
      </section>
    </div>
  );
}

export default MyWallet;