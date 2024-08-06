import React, { useState } from 'react'
import { Row, Col } from 'antd';
import ModalIndex from './Modal';
import './Info.css'

const Info = () => {

const [stockerautoMode, autoModeHandler] = useState({
    autoMode:{
        mode: true,
        text: "ON",
        color: "#00cd00"
    }
})

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentStatus, setCurrentStatus] = useState(null);

const changeAutoMode = () => {
    autoModeHandler((prevState)=>({
        ...prevState,
        autoMode:{
            ...prevState.autoMode,
            mode: !prevState.autoMode.mode
        }
    }));
    console.log(stockerautoMode.autoMode.mode);
}
let showModeText;

if (stockerautoMode.autoMode.mode) {
    showModeText = {
        text: "ON",
        color: "#00cd00"
    }
} else {
    showModeText = {
        text: "OFF",
        color: "red"
    }
}

let stockers = [
        {
            number: "編號1",
            status: "empty",
            background: "",
            Url:''
        },
        {
            number: "編號2",
            status: "empty",
            background: ""
        },
        {
            number: "編號3",
            status: "empty",
            background: ""
        },
        {
            number: "編號4",
            status: "canUse",
            background: ""
        },
        {
            number: "編號5",
            status: "canUse",
            background: ""
        },
        {
            number: "編號6",
            status: "canUse",
            background: ""
        },
        {
            number: "編號7",
            status: "full",
            background: ""
        },
        {
            number: "編號8",
            status: "full",
            background: ""
        },
        {
            number: "編號9",
            status: "full",
            background: ""
        },
        {
            number: "編號10",
            status: "test",
            background: ""
        },
        {
            number: "編號11",
            status: "erro",
            background: ""
        },
        {
            number: "編號12",
            status: "erro",
            background: ""
        },
        {
            number: "編號13",
            status: "erro",
            background: ""
        },
        {
            number: "編號14",
            status: "erro",
            background: ""
        },
        {
            number: "編號15",
            status: "erro",
            background: ""
        },
        {
            number: "編號16",
            status: "erro",
            background: ""
        },
 ]


 const openModal = (status) => {
    setCurrentStatus(status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStatus(null);
  };
 
  return (
    <div className='wrapper'>
         <div className="autoMode">
             STK-M自動模式：<span style={{color: showModeText.color}}>{ showModeText.text }</span>
         </div>
         <button onClick={changeAutoMode}>click</button>
        <Row className='stockerTable'>
             {
                stockers.map((box,index) => {
                    switch (box.status) {
                        case 'erro':
                            box.background = "red"
                            break;
                        case 'empty':
                            box.background = "#ccc"
                            break;
                        case 'canUse':
                            box.background = "green"
                            break;
                        case 'full':
                            box.background = "orange"
                            break;
                        case 'test':
                            box.background = "blue"
                            break;
                        default:
                            break;
                    }
                    return <Col lg={3} sm={4} xs={6} onClick={() => openModal(box.status)} style={{backgroundColor: box.background}} key={index}>
                        <p>
                            { box.number }
                        </p>
                    </Col>
                })
            }
        </Row>
        <ModalIndex open={isModalOpen} onCancel={closeModal} status={currentStatus} />
      </div>
  )
}

export default Info
