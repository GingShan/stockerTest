import Test from "./Test";
import CanUse from "./canUse";
import Empty from "./empty";
import Full from "./full";
import Erro from "./erro";

const ModalContent = ({ status }) => {
    switch (status) {
        case 'erro':
            return <Erro />;
        case 'empty':
            return <Empty />;
            
        case 'canUse':
            return <CanUse />;
            
        case 'full':
            return <Full />;
            
        case 'test':
            return <Test />;
            
        default:
            return null;
    }
  };


export default ModalContent;