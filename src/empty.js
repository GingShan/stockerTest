import React, { Component } from 'react'

export default class empty extends Component {

  render() {
    const { onCancel } = this.props
    return (
      <div>
        empty
        <div className='btnArea'>
            <button className='btnType closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
