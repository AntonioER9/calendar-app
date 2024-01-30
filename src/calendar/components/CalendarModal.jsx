import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); //Necesario para la configuración debe apuntar al id de nuestro index.html

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={ isOpen }
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1>Hola mundo</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sit dolor quae debitis odio nemo corrupti veritatis deleniti voluptas magni modi unde incidunt, ad eius in vel cupiditate, soluta delectus?</p>

        </Modal>
    )
}
