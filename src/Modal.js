import ModalContent from './ModalContent';
import './modal.css';

const Modal = ({ open, onCancel, status }) => {
    if (!open) {
        return null;
      }
    
      return (
        <div className="modal">
          <div className="modal-content">
            <ModalContent status={status} onCancel={onCancel} />
          </div>
        </div>
      );
};

export default Modal;