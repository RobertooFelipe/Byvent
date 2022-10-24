import './style.scss';
import Sidebar from '../../components/Sidebar'
import SoldEvent from '../../components/SoldEvent';
import NavButton from '../../components/NavButton';
import banckIcon from '../../assets/images/icon_bank.svg';
import moneyIcon from '../../assets/images/icon_money.svg'

function MyWallet() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
          <header>
            <h1>Minha carteira...</h1>
          </header>
        <div className='dashboardContent'>
          <div className='containerData'>
            <div>
              <span>
                <h2>Total de ingressos vendidos</h2>
                <h1>12</h1>
              </span>
              <span className='wallet'>
                <h2>Minha carteira atual</h2>
                <h1>R$157,00</h1>
                <NavButton route='/'>
                  Retirar valor <img className='positionImg' src={moneyIcon} alt="" />
                </NavButton>
              </span>
            </div>
            <div>
              <span>
                <h2>Valor total obtido</h2>
                <h1>R$253,00</h1>
              </span>
              <span>
                <NavButton route='/'>
                  Vincular conta bancária <img className='positionImg' src={banckIcon} alt="" />
                </NavButton>
              </span>
            </div>
          </div>
          <div className='rightContnetDashboardPage'>
            <header>
              <h2>
                Total de eventos criados
              </h2>
              <h1>5</h1>
            </header>
            <div className='listEventsSold'>
              <h2>Ingressos vendidos</h2>
              <section className='listHistSold'>
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Teste'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaaaaaae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaaaaaae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaaaaaae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaaaaaae'           
                />
                <SoldEvent
                  eventPrice='15,45'
                  eventName='Testaaaaaaaaae'           
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyWallet;