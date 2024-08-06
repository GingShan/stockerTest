import React, { Component } from 'react'

export default class full extends Component {

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
