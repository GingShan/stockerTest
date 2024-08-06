import React, { Component } from 'react'
import { Table, Row, Col } from 'antd'

export default class empty extends Component {
  constructor(){
    super();
    this.state = {
      StockerInfo: [],
      tabletitle: [
        {
          title: "batch_id",
          dataIndex: "batch_id",
          width: 120
        },
        {
          title: "wafer_totleCount",
          dataIndex: "wafer_totleCount",
          width: 120
        },
        {
          title: "Time",
          dataIndex: "Time",
          width: 160
        },
        {
          title: "number",
          dataIndex: "number",
          width: 120
        },
    ],
    }
  }
  render() {
    const { onCancel } = this.props;
    const { StockerInfo, tabletitle } = this.state;
    return (
      <>
        <button className="btnType bookingBtn">預約入庫</button>
        <div className="table addStocker">
            <Table className='infoTable' dataSource={ StockerInfo } columns={ tabletitle }></Table>
        </div>
        <div className='btnArea'>
            <button className='btnType addBtn'>入庫</button>
            <button className='btnType closeBtn' onClick={onCancel}>關閉</button>
        </div>
      </>
    )
  }
}
