import './style.scss';
import Sidebar from '../../components/Sidebar'
import NavButton from '../../components/NavButton';
import logo from '../../assets/images/byvent_logo.svg'

function AddEvent() {
  return (
    <div className='containerApp'>
      <Sidebar />
      <section className='contentPage'>
        <header>
          <h1>Criando item...</h1>
        </header>

        <div className='containerNewEvent'>
          <div className='infoEvent'>
            <div>
              <h2>Qual será o nome do evento?</h2>
              <input type="text" />
            </div>
            <div className='inlineOption'>
              <div>
                <h2>Data do evento</h2>
                <input type="date" />
              </div>
              <div>
                <h2>Data do evento</h2>
                <input type="date" />
              </div>
            </div>
            <div className='inlineOption'>
              <div>
                  <h2>Horário início</h2>
                  <input type="time" />
                </div>
                <div>
                  <h2>Horário fim</h2>
                  <input type="time" />
                </div>
              </div>
            <div>
              <h2>Descrição do evento</h2>
              <textarea name="description"></textarea>
            </div>
          </div>
          <div className='containerSendData'>
            <img src={logo} alt="Byvent" />
            <NavButton route='/allEvents'>
              Criar
            </NavButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddEvent;