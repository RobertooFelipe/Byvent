import './style.scss'
import { useState } from 'react'
import Modal from 'react-modal'
import Qrcode from '../../assets/images/qr_code.svg'
import Printer from '../../assets/images/printer.svg'
import BackOption from '../../assets/images/back_dark.svg'
import Trash from '../../assets/images/icon_trash.svg'
import Edit from '../../assets/images/icon_edit.svg'

Modal.setAppElement('#root')

interface IOpenModalProps{
  eventName: string;
  imgSrc: string;
  eventDate: string;
  admOption?: boolean;
}

function OpenModal({eventName, imgSrc, eventDate, admOption}:IOpenModalProps){

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal(){
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const customStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        borderRadius: '30px',
        background:'linear-gradient(45deg, #06112B,#0E3EBB)',
      }
  }

  return(
    <>
      <button className="detailsBurron" onClick={handleOpenModal}>
        Detalhes
      </button>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyle}
      >
        <img className='imgEvent' src={imgSrc} alt="Evento" />
        <div className='containerModal'>
          <div>
            <div className='infoEventModal'>
              <h1>{eventName}</h1>
              <h2>{eventDate}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi autem nisi nam ullam omnis velit eveniet delectus commodi ea, voluptatem tenetur consequuntur distinctio at unde error quo qui accusamus.</p>
              <br />
              <p className='priceTicket'>R$56,90</p>           
            </div>
          </div>
          {admOption === true ? 
            <div className='containerAdmQRcode'>
                <button onClick={handleCloseModal}><img src={BackOption} alt="Voltar" /></button>
                <button onClick={handleCloseModal}><img src={Edit} alt="Voltar" /></button>
                <button onClick={handleCloseModal}><img src={Trash} alt="Voltar" /></button>
            </div>
          : 
            <div className='containerQRcode'>
              <img src={Qrcode} alt="QRcode" />
              <h2>754659</h2>
              <div className='buttonInLine'>
                <button onClick={handleCloseModal}><img src={BackOption} alt="Voltar" /></button>
                <button>Imprimir <img className='printer' src={Printer} alt="Impressora" /></button>
              </div>
            </div>
          }
        </div>
      </Modal>
    </>
  )
}

export default OpenModal