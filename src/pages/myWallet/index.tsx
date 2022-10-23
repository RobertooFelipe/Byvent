import './style.scss';
import Sidebar from '../../components/Sidebar'

function MyWallet() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Minha carteira...</h1>
        </header>
      </section>
    </div>
  );
}

export default MyWallet;