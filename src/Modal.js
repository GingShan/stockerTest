import ModalContent from './ModalContent';

const Modal = ({ open, onCancel, status }) => {
    if (!open) {
        return null;
      }
    
      return (
        <div className="modal">
          <div className="modal-content">
            <button onClick={onCancel}>Close</button>
            <ModalContent status={status} />
          </div>
        </div>
      );
};

export default Modal;