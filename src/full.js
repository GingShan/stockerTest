import React, { Component } from 'react'

export default class full extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { onCancel } = this.props
    return (
      <div>
        full
        <div className='btnArea'>
            <button className='btnType closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
