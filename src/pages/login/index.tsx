import './style.scss';
import logo from '../../assets/images/byvent_logo.svg'
import iconNext from '../../assets/images/icon_next.svg'

import NavButton from '../../components/NavButton';

function Login() {
  return (
    <div className='containerApp backgroundLogin'>
      <section>
        <img src={logo} alt="Byvent Logo" />
        <h1>Byvent</h1>

        <NavButton route="/allEvents">
          Acessar sistema <img src={iconNext} alt="" />
        </NavButton>
      </section>
    </div>
  );
}

export default Login;