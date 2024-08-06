import Test from "./Test";
import CanUse from "./canUse";
import Empty from "./empty";
import Full from "./full";
import Erro from "./erro";

const ModalContent = ({ status, onCancel }) => {
    switch (status) {
        case 'erro':
            return <Erro onCancel={onCancel} />;
        case 'empty':
            return <Empty onCancel={onCancel} />;
            
        case 'canUse':
            return <CanUse onCancel={onCancel} />;
            
        case 'full':
            return <Full onCancel={onCancel} />;
            
        case 'test':
            return <Test onCancel={onCancel} />;
            
        default:
            return null;
    }
  };


export default ModalContent;